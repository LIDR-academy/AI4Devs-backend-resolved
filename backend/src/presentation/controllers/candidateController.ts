import { Request, Response } from 'express';
import { addCandidate, getCandidateById, updateCandidateInterviewStepService } from '../../application/services/candidateService';

export const addCandidateController = async (req: Request, res: Response) => {
    try {
        const candidateData = req.body;
        const candidate = await addCandidate(candidateData);
        res.status(201).json({ message: 'Candidate added successfully', data: candidate });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: 'Error adding candidate', error: error.message });
        } else {
            res.status(400).json({ message: 'Error adding candidate', error: 'Unknown error' });
        }
    }
};

export const getCandidateByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        return res.status(400).json({ message: 'Invalid candidate ID' });
    }

    try {
        const candidate = await getCandidateById(Number(id));
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }
        res.status(200).json(candidate);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { addCandidate, getCandidateById };

export const updateCandidateInterviewStep = async (req: Request, res: Response) => {
    console.log('Solicitud PUT recibida:', req.body);
    try {
        const applicationId = parseInt(req.params.id);
        const { currentInterviewStep } = req.body;

        if (isNaN(applicationId) || !currentInterviewStep) {
            console.log('Faltan campos requeridos');
            return res.status(400).json({ error: 'ID de aplicación válido y currentInterviewStep son requeridos' });
        }

        console.log('Llamando a updateCandidateInterviewStepService');
        const updatedApplication = await updateCandidateInterviewStepService(applicationId, currentInterviewStep);

        if (!updatedApplication) {
            console.log('Aplicación no encontrada');
            return res.status(404).json({ error: 'Aplicación no encontrada' });
        }

        console.log('Aplicación actualizada exitosamente');
        res.status(200).json({
            message: 'Paso de entrevista de la aplicación actualizado exitosamente',
            application_id: applicationId,
            new_interview_step: currentInterviewStep
        });
    } catch (error) {
        console.error('Error en updateCandidateInterviewStep:', error);
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Error Interno del Servidor' });
        }
    }
};