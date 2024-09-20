"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var candidateService_1 = require("./candidateService");
var validator_1 = require("../validator");
var Candidate_1 = require("../../domain/models/Candidate");
var Education_1 = require("../../domain/models/Education");
var WorkExperience_1 = require("../../domain/models/WorkExperience");
var Resume_1 = require("../../domain/models/Resume");
jest.mock('../validator');
jest.mock('../../domain/models/Candidate');
jest.mock('../../domain/models/Education');
jest.mock('../../domain/models/WorkExperience');
jest.mock('../../domain/models/Resume');
var MockedCandidate = jest.mocked(Candidate_1.Candidate);
var MockedEducation = jest.mocked(Education_1.Education);
var MockedWorkExperience = jest.mocked(WorkExperience_1.WorkExperience);
var MockedResume = jest.mocked(Resume_1.Resume);
describe('CandidateService', function () {
    afterEach(function () {
        jest.resetAllMocks();
    });
    describe('addCandidate', function () {
        it('should validate candidate data', function () { return __awaiter(void 0, void 0, void 0, function () {
            var candidateData, mockSave;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        candidateData = {
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'john.doe@example.com',
                            phone: '1234567890',
                            address: '123 Main St',
                            educations: [],
                            workExperiences: [],
                            cv: {}
                        };
                        mockSave = jest.fn().mockResolvedValue(__assign({ id: 1 }, candidateData));
                        MockedCandidate.mockImplementation(function (data) { return (__assign(__assign({}, data), { save: mockSave, education: [], workExperience: [], resumes: [] })); });
                        return [4 /*yield*/, (0, candidateService_1.addCandidate)(candidateData)];
                    case 1:
                        _a.sent();
                        expect(validator_1.validateCandidateData).toHaveBeenCalledWith(candidateData);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should create a new candidate', function () { return __awaiter(void 0, void 0, void 0, function () {
            var candidateData, mockSaveCandidate, mockSaveEducation, mockSaveWorkExperience, mockSaveResume, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        candidateData = {
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'john.doe@example.com',
                            phone: '1234567890',
                            address: '123 Main St',
                            educations: [{ degree: 'BSc' }],
                            workExperiences: [{ company: 'Company' }],
                            cv: { fileName: 'resume.pdf' }
                        };
                        mockSaveCandidate = jest.fn().mockResolvedValue(__assign({ id: 1 }, candidateData));
                        mockSaveEducation = jest.fn().mockResolvedValue({ id: 1, degree: 'BSc', candidateId: 1 });
                        mockSaveWorkExperience = jest.fn().mockResolvedValue({ id: 1, company: 'Company', candidateId: 1 });
                        mockSaveResume = jest.fn().mockResolvedValue({ id: 1, fileName: 'resume.pdf', candidateId: 1 });
                        MockedCandidate.mockImplementation(function (data) { return (__assign(__assign({}, data), { save: mockSaveCandidate, education: [], workExperience: [], resumes: [] })); });
                        MockedEducation.mockImplementation(function (data) { return (__assign(__assign({}, data), { save: mockSaveEducation })); });
                        MockedWorkExperience.mockImplementation(function (data) { return (__assign(__assign({}, data), { save: mockSaveWorkExperience })); });
                        MockedResume.mockImplementation(function (data) { return (__assign(__assign({}, data), { save: mockSaveResume })); });
                        return [4 /*yield*/, (0, candidateService_1.addCandidate)(candidateData)];
                    case 1:
                        result = _a.sent();
                        expect(mockSaveCandidate).toHaveBeenCalled();
                        expect(mockSaveEducation).toHaveBeenCalled();
                        expect(mockSaveWorkExperience).toHaveBeenCalled();
                        expect(mockSaveResume).toHaveBeenCalled();
                        expect(result).toEqual(__assign({ id: 1 }, candidateData));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle validation errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var candidateData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        candidateData = {
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'invalid-email',
                            phone: '1234567890',
                            address: '123 Main St',
                            educations: [],
                            workExperiences: [],
                            cv: {}
                        };
                        // Mock validateCandidateData to throw an error
                        validator_1.validateCandidateData.mockImplementation(function () {
                            throw new Error('Invalid email');
                        });
                        return [4 /*yield*/, expect((0, candidateService_1.addCandidate)(candidateData)).rejects.toThrow('Invalid email')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle database connection errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var candidateData, mockSave;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        candidateData = {
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'john.doe@example.com',
                            phone: '1234567890',
                            address: '123 Main St',
                            educations: [],
                            workExperiences: [],
                            cv: {}
                        };
                        mockSave = jest.fn().mockRejectedValue(new Error('Database connection error'));
                        MockedCandidate.mockImplementation(function (data) { return (__assign(__assign({}, data), { save: mockSave, education: [], workExperience: [], resumes: [] })); });
                        return [4 /*yield*/, expect((0, candidateService_1.addCandidate)(candidateData)).rejects.toThrow('Database connection error')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle unique constraint errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var candidateData, mockSave;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        candidateData = {
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'john.doe@example.com',
                            phone: '1234567890',
                            address: '123 Main St',
                            educations: [],
                            workExperiences: [],
                            cv: {}
                        };
                        mockSave = jest.fn().mockRejectedValue({ code: 'P2002' });
                        MockedCandidate.mockImplementation(function (data) { return (__assign(__assign({}, data), { save: mockSave, education: [], workExperience: [], resumes: [] })); });
                        return [4 /*yield*/, expect((0, candidateService_1.addCandidate)(candidateData)).rejects.toThrow('The email already exists in the database')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('getCandidateById', function () {
        it('should return candidate information for a valid ID', function () { return __awaiter(void 0, void 0, void 0, function () {
            var candidateId, candidateData, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        candidateId = 1;
                        candidateData = {
                            id: candidateId,
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'john.doe@example.com',
                            phone: '1234567890',
                            address: '123 Main St',
                            education: [],
                            workExperience: [],
                            resumes: []
                        };
                        MockedCandidate.findOne = jest.fn().mockResolvedValue(candidateData);
                        return [4 /*yield*/, (0, candidateService_1.getCandidateById)(candidateId)];
                    case 1:
                        result = _a.sent();
                        expect(MockedCandidate.findOne).toHaveBeenCalledWith(candidateId);
                        expect(result).toEqual(candidateData);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return null if candidate is not found', function () { return __awaiter(void 0, void 0, void 0, function () {
            var candidateId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        candidateId = 1;
                        MockedCandidate.findOne = jest.fn().mockResolvedValue(null);
                        return [4 /*yield*/, (0, candidateService_1.getCandidateById)(candidateId)];
                    case 1:
                        result = _a.sent();
                        expect(MockedCandidate.findOne).toHaveBeenCalledWith(candidateId);
                        expect(result).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle database connection errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var candidateId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        candidateId = 1;
                        MockedCandidate.findOne = jest.fn().mockRejectedValue(new Error('Database connection error'));
                        return [4 /*yield*/, expect((0, candidateService_1.getCandidateById)(candidateId)).rejects.toThrow('Database connection error')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
