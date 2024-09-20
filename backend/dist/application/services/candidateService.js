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
exports.getCandidateById = exports.addCandidate = void 0;
var Candidate_1 = require("../../domain/models/Candidate");
var validator_1 = require("../validator");
var Education_1 = require("../../domain/models/Education");
var WorkExperience_1 = require("../../domain/models/WorkExperience");
var Resume_1 = require("../../domain/models/Resume");
var addCandidate = function (candidateData) { return __awaiter(void 0, void 0, void 0, function () {
    var candidate, savedCandidate, candidateId, _i, _a, education, educationModel, _b, _c, experience, experienceModel, resumeModel, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                try {
                    (0, validator_1.validateCandidateData)(candidateData); // Validar los datos del candidato
                }
                catch (error) {
                    throw new Error(error);
                }
                candidate = new Candidate_1.Candidate(candidateData);
                _d.label = 1;
            case 1:
                _d.trys.push([1, 13, , 14]);
                return [4 /*yield*/, candidate.save()];
            case 2:
                savedCandidate = _d.sent();
                candidateId = savedCandidate.id;
                if (!candidateData.educations) return [3 /*break*/, 6];
                _i = 0, _a = candidateData.educations;
                _d.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3 /*break*/, 6];
                education = _a[_i];
                educationModel = new Education_1.Education(education);
                educationModel.candidateId = candidateId;
                return [4 /*yield*/, educationModel.save()];
            case 4:
                _d.sent();
                candidate.education.push(educationModel);
                _d.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                if (!candidateData.workExperiences) return [3 /*break*/, 10];
                _b = 0, _c = candidateData.workExperiences;
                _d.label = 7;
            case 7:
                if (!(_b < _c.length)) return [3 /*break*/, 10];
                experience = _c[_b];
                experienceModel = new WorkExperience_1.WorkExperience(experience);
                experienceModel.candidateId = candidateId;
                return [4 /*yield*/, experienceModel.save()];
            case 8:
                _d.sent();
                candidate.workExperience.push(experienceModel);
                _d.label = 9;
            case 9:
                _b++;
                return [3 /*break*/, 7];
            case 10:
                if (!(candidateData.cv && Object.keys(candidateData.cv).length > 0)) return [3 /*break*/, 12];
                resumeModel = new Resume_1.Resume(candidateData.cv);
                resumeModel.candidateId = candidateId;
                return [4 /*yield*/, resumeModel.save()];
            case 11:
                _d.sent();
                candidate.resumes.push(resumeModel);
                _d.label = 12;
            case 12: return [2 /*return*/, savedCandidate];
            case 13:
                error_1 = _d.sent();
                if (error_1.code === 'P2002') {
                    // Unique constraint failed on the fields: (`email`)
                    throw new Error('The email already exists in the database');
                }
                else {
                    throw error_1;
                }
                return [3 /*break*/, 14];
            case 14: return [2 /*return*/];
        }
    });
}); };
exports.addCandidate = addCandidate;
var getCandidateById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var candidate, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Candidate_1.Candidate.findOne(id)];
            case 1:
                candidate = _a.sent();
                return [2 /*return*/, candidate];
            case 2:
                error_2 = _a.sent();
                throw new Error('Database connection error');
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCandidateById = getCandidateById;
