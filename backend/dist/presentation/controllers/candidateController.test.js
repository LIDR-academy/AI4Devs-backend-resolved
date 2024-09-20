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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var candidateController_1 = require("./candidateController");
var candidateService = __importStar(require("../../application/services/candidateService"));
jest.mock('../../application/services/candidateService', function () { return ({
    addCandidate: jest.fn(),
    getCandidateById: jest.fn(),
}); });
var mockRequest = function (params, body) {
    if (body === void 0) { body = {}; }
    return ({
        params: params,
        body: body,
    });
};
var mockResponse = function () {
    var res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};
describe('addCandidateController', function () {
    beforeEach(function () {
        jest.clearAllMocks();
    });
    it('should add a candidate successfully and return status 201 with a success message', function () { return __awaiter(void 0, void 0, void 0, function () {
        var candidateData, savedCandidate, req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    candidateData = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };
                    savedCandidate = __assign({ id: 1 }, candidateData);
                    candidateService.addCandidate.mockResolvedValue(savedCandidate);
                    req = mockRequest({}, candidateData);
                    res = mockResponse();
                    return [4 /*yield*/, (0, candidateController_1.addCandidateController)(req, res)];
                case 1:
                    _a.sent();
                    expect(candidateService.addCandidate).toHaveBeenCalledWith(candidateData);
                    expect(res.status).toHaveBeenCalledWith(201);
                    expect(res.json).toHaveBeenCalledWith({
                        message: 'Candidate added successfully',
                        data: savedCandidate,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle validation errors and return status 400 with an error message', function () { return __awaiter(void 0, void 0, void 0, function () {
        var candidateData, req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    candidateData = { firstName: 'John', email: 'invalid-email' };
                    candidateService.addCandidate.mockRejectedValue(new Error('Invalid email'));
                    req = mockRequest({}, candidateData);
                    res = mockResponse();
                    return [4 /*yield*/, (0, candidateController_1.addCandidateController)(req, res)];
                case 1:
                    _a.sent();
                    expect(candidateService.addCandidate).toHaveBeenCalledWith(candidateData);
                    expect(res.status).toHaveBeenCalledWith(400);
                    expect(res.json).toHaveBeenCalledWith({
                        message: 'Error adding candidate',
                        error: 'Invalid email',
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle unique constraint errors and return status 400 with an error message', function () { return __awaiter(void 0, void 0, void 0, function () {
        var candidateData, req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    candidateData = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };
                    candidateService.addCandidate.mockRejectedValue(new Error('The email already exists in the database'));
                    req = mockRequest({}, candidateData);
                    res = mockResponse();
                    return [4 /*yield*/, (0, candidateController_1.addCandidateController)(req, res)];
                case 1:
                    _a.sent();
                    expect(candidateService.addCandidate).toHaveBeenCalledWith(candidateData);
                    expect(res.status).toHaveBeenCalledWith(400);
                    expect(res.json).toHaveBeenCalledWith({
                        message: 'Error adding candidate',
                        error: 'The email already exists in the database',
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle unknown errors and return status 400 with a generic error message', function () { return __awaiter(void 0, void 0, void 0, function () {
        var candidateData, req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    candidateData = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };
                    candidateService.addCandidate.mockRejectedValue({});
                    req = mockRequest({}, candidateData);
                    res = mockResponse();
                    return [4 /*yield*/, (0, candidateController_1.addCandidateController)(req, res)];
                case 1:
                    _a.sent();
                    expect(candidateService.addCandidate).toHaveBeenCalledWith(candidateData);
                    expect(res.status).toHaveBeenCalledWith(400);
                    expect(res.json).toHaveBeenCalledWith({
                        message: 'Error adding candidate',
                        error: 'Unknown error',
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('getCandidateByIdController', function () {
    beforeEach(function () {
        jest.clearAllMocks();
    });
    it('should return candidate information for a valid ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var candidateId, candidateData, req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    candidateId = 1;
                    candidateData = { id: candidateId, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890', address: '123 Main St' };
                    candidateService.getCandidateById.mockResolvedValue(candidateData);
                    req = mockRequest({ id: candidateId });
                    res = mockResponse();
                    return [4 /*yield*/, (0, candidateController_1.getCandidateByIdController)(req, res)];
                case 1:
                    _a.sent();
                    expect(candidateService.getCandidateById).toHaveBeenCalledWith(candidateId);
                    expect(res.status).toHaveBeenCalledWith(200);
                    expect(res.json).toHaveBeenCalledWith(candidateData);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return 400 for an invalid ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    req = mockRequest({ id: 'invalid' });
                    res = mockResponse();
                    return [4 /*yield*/, (0, candidateController_1.getCandidateByIdController)(req, res)];
                case 1:
                    _a.sent();
                    expect(res.status).toHaveBeenCalledWith(400);
                    expect(res.json).toHaveBeenCalledWith({
                        message: 'Invalid candidate ID',
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return 404 if candidate is not found', function () { return __awaiter(void 0, void 0, void 0, function () {
        var candidateId, req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    candidateId = 1;
                    candidateService.getCandidateById.mockResolvedValue(null);
                    req = mockRequest({ id: candidateId });
                    res = mockResponse();
                    return [4 /*yield*/, (0, candidateController_1.getCandidateByIdController)(req, res)];
                case 1:
                    _a.sent();
                    expect(candidateService.getCandidateById).toHaveBeenCalledWith(candidateId);
                    expect(res.status).toHaveBeenCalledWith(404);
                    expect(res.json).toHaveBeenCalledWith({
                        message: 'Candidate not found',
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return 500 for database connection errors', function () { return __awaiter(void 0, void 0, void 0, function () {
        var candidateId, req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    candidateId = 1;
                    candidateService.getCandidateById.mockRejectedValue(new Error('Database connection error'));
                    req = mockRequest({ id: candidateId });
                    res = mockResponse();
                    return [4 /*yield*/, (0, candidateController_1.getCandidateByIdController)(req, res)];
                case 1:
                    _a.sent();
                    expect(candidateService.getCandidateById).toHaveBeenCalledWith(candidateId);
                    expect(res.status).toHaveBeenCalledWith(500);
                    expect(res.json).toHaveBeenCalledWith({
                        message: 'Internal server error',
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
