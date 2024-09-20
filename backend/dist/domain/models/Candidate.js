"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candidate = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var Candidate = /** @class */ (function () {
    function Candidate(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.phone = data.phone;
        this.address = data.address;
        this.education = data.education || [];
        this.workExperience = data.workExperience || [];
        this.resumes = data.resumes || [];
        this.applications = data.applications || [];
    }
    Candidate.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var candidateData, error_1, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        candidateData = {};
                        // Solo añadir al objeto candidateData los campos que no son undefined
                        if (this.firstName !== undefined)
                            candidateData.firstName = this.firstName;
                        if (this.lastName !== undefined)
                            candidateData.lastName = this.lastName;
                        if (this.email !== undefined)
                            candidateData.email = this.email;
                        if (this.phone !== undefined)
                            candidateData.phone = this.phone;
                        if (this.address !== undefined)
                            candidateData.address = this.address;
                        // Añadir educations si hay alguna para añadir
                        if (this.education.length > 0) {
                            candidateData.educations = {
                                create: this.education.map(function (edu) { return ({
                                    institution: edu.institution,
                                    title: edu.title,
                                    startDate: edu.startDate,
                                    endDate: edu.endDate
                                }); })
                            };
                        }
                        // Añadir workExperiences si hay alguna para añadir
                        if (this.workExperience.length > 0) {
                            candidateData.workExperiences = {
                                create: this.workExperience.map(function (exp) { return ({
                                    company: exp.company,
                                    position: exp.position,
                                    description: exp.description,
                                    startDate: exp.startDate,
                                    endDate: exp.endDate
                                }); })
                            };
                        }
                        // Añadir resumes si hay alguno para añadir
                        if (this.resumes.length > 0) {
                            candidateData.resumes = {
                                create: this.resumes.map(function (resume) { return ({
                                    filePath: resume.filePath,
                                    fileType: resume.fileType
                                }); })
                            };
                        }
                        // Añadir applications si hay alguna para añadir
                        if (this.applications.length > 0) {
                            candidateData.applications = {
                                create: this.applications.map(function (app) { return ({
                                    positionId: app.positionId,
                                    candidateId: app.candidateId,
                                    applicationDate: app.applicationDate,
                                    currentInterviewStep: app.currentInterviewStep,
                                    notes: app.notes,
                                }); })
                            };
                        }
                        if (!this.id) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prisma.candidate.update({
                                where: { id: this.id },
                                data: candidateData
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        if (error_1 instanceof client_1.Prisma.PrismaClientInitializationError) {
                            // Database connection error
                            throw new Error('No se pudo conectar con la base de datos. Por favor, asegúrese de que el servidor de base de datos esté en ejecución.');
                        }
                        else if (error_1.code === 'P2025') {
                            // Record not found error
                            throw new Error('No se pudo encontrar el registro del candidato con el ID proporcionado.');
                        }
                        else {
                            throw error_1;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 8];
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, prisma.candidate.create({
                                data: candidateData
                            })];
                    case 6:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 7:
                        error_2 = _a.sent();
                        if (error_2 instanceof client_1.Prisma.PrismaClientInitializationError) {
                            // Database connection error
                            throw new Error('No se pudo conectar con la base de datos. Por favor, asegúrese de que el servidor de base de datos esté en ejecución.');
                        }
                        else {
                            throw error_2;
                        }
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Candidate.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.candidate.findUnique({
                            where: { id: id },
                            include: {
                                educations: true,
                                workExperiences: true,
                                resumes: true,
                                applications: {
                                    include: {
                                        position: {
                                            select: {
                                                id: true,
                                                title: true
                                            }
                                        },
                                        interviews: {
                                            select: {
                                                interviewDate: true,
                                                interviewStep: {
                                                    select: {
                                                        name: true
                                                    }
                                                },
                                                notes: true,
                                                score: true
                                            }
                                        }
                                    }
                                }
                            }
                        })];
                    case 1:
                        data = _a.sent();
                        if (!data)
                            return [2 /*return*/, null];
                        return [2 /*return*/, new Candidate(data)];
                }
            });
        });
    };
    return Candidate;
}());
exports.Candidate = Candidate;
