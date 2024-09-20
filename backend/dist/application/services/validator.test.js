"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("../validator");
describe('Validator Tests', function () {
    describe('validateName', function () {
        it('should validate a correct name', function () {
            expect(function () { return (0, validator_1.validateName)('John Doe'); }).not.toThrow();
        });
        it('should throw an error for an invalid name', function () {
            expect(function () { return (0, validator_1.validateName)(''); }).toThrow('Invalid name');
            expect(function () { return (0, validator_1.validateName)('J'); }).toThrow('Invalid name');
            expect(function () { return (0, validator_1.validateName)('A'.repeat(101)); }).toThrow('Invalid name');
            expect(function () { return (0, validator_1.validateName)('John123'); }).toThrow('Invalid name');
        });
    });
    describe('validateEmail', function () {
        it('should validate a correct email', function () {
            expect(function () { return (0, validator_1.validateEmail)('john.doe@example.com'); }).not.toThrow();
        });
        it('should throw an error for an invalid email', function () {
            expect(function () { return (0, validator_1.validateEmail)(''); }).toThrow('Invalid email');
            expect(function () { return (0, validator_1.validateEmail)('john.doe'); }).toThrow('Invalid email');
            expect(function () { return (0, validator_1.validateEmail)('john.doe@com'); }).toThrow('Invalid email');
        });
    });
    describe('validatePhone', function () {
        it('should validate a correct phone number', function () {
            expect(function () { return (0, validator_1.validatePhone)('612345678'); }).not.toThrow();
        });
        it('should throw an error for an invalid phone number', function () {
            expect(function () { return (0, validator_1.validatePhone)(''); }).not.toThrow(); // Optional field
            expect(function () { return (0, validator_1.validatePhone)('512345678'); }).toThrow('Invalid phone');
            expect(function () { return (0, validator_1.validatePhone)('61234567'); }).toThrow('Invalid phone');
            expect(function () { return (0, validator_1.validatePhone)('6123456789'); }).toThrow('Invalid phone');
        });
    });
    describe('validateDate', function () {
        it('should validate a correct date', function () {
            expect(function () { return (0, validator_1.validateDate)('2023-01-01'); }).not.toThrow();
        });
        it('should throw an error for an invalid date', function () {
            expect(function () { return (0, validator_1.validateDate)(''); }).toThrow('Invalid date');
            expect(function () { return (0, validator_1.validateDate)('01-01-2023'); }).toThrow('Invalid date');
            expect(function () { return (0, validator_1.validateDate)('2023/01/01'); }).toThrow('Invalid date');
        });
    });
    describe('validateAddress', function () {
        it('should validate a correct address', function () {
            expect(function () { return (0, validator_1.validateAddress)('123 Main St'); }).not.toThrow();
        });
        it('should throw an error for an invalid address', function () {
            expect(function () { return (0, validator_1.validateAddress)('A'.repeat(101)); }).toThrow('Invalid address');
        });
    });
    describe('validateEducation', function () {
        it('should validate correct education data', function () {
            var education = {
                institution: 'University',
                title: 'BSc',
                startDate: '2020-01-01',
                endDate: '2023-01-01'
            };
            expect(function () { return (0, validator_1.validateEducation)(education); }).not.toThrow();
        });
        it('should throw an error for invalid education data', function () {
            var invalidEducation = {
                institution: '',
                title: 'BSc',
                startDate: '2020-01-01',
                endDate: '2023-01-01'
            };
            expect(function () { return (0, validator_1.validateEducation)(invalidEducation); }).toThrow('Invalid institution');
            var invalidEducation2 = {
                institution: 'University',
                title: '',
                startDate: '2020-01-01',
                endDate: '2023-01-01'
            };
            expect(function () { return (0, validator_1.validateEducation)(invalidEducation2); }).toThrow('Invalid title');
            var invalidEducation3 = {
                institution: 'University',
                title: 'BSc',
                startDate: '2020-01-01',
                endDate: '2023/01/01'
            };
            expect(function () { return (0, validator_1.validateEducation)(invalidEducation3); }).toThrow('Invalid end date');
        });
    });
    describe('validateExperience', function () {
        it('should validate correct experience data', function () {
            var experience = {
                company: 'Company',
                position: 'Developer',
                startDate: '2020-01-01',
                endDate: '2023-01-01'
            };
            expect(function () { return (0, validator_1.validateExperience)(experience); }).not.toThrow();
        });
        it('should throw an error for invalid experience data', function () {
            var invalidExperience = {
                company: '',
                position: 'Developer',
                startDate: '2020-01-01',
                endDate: '2023-01-01'
            };
            expect(function () { return (0, validator_1.validateExperience)(invalidExperience); }).toThrow('Invalid company');
            var invalidExperience2 = {
                company: 'Company',
                position: '',
                startDate: '2020-01-01',
                endDate: '2023-01-01'
            };
            expect(function () { return (0, validator_1.validateExperience)(invalidExperience2); }).toThrow('Invalid position');
            var invalidExperience3 = {
                company: 'Company',
                position: 'Developer',
                startDate: '2020-01-01',
                endDate: '2023/01/01'
            };
            expect(function () { return (0, validator_1.validateExperience)(invalidExperience3); }).toThrow('Invalid end date');
        });
    });
    describe('validateCV', function () {
        it('should validate correct CV data', function () {
            var cv = {
                filePath: '/path/to/cv.pdf',
                fileType: 'application/pdf'
            };
            expect(function () { return (0, validator_1.validateCV)(cv); }).not.toThrow();
        });
        it('should throw an error for invalid CV data', function () {
            var invalidCV = {
                filePath: '',
                fileType: 'application/pdf'
            };
            expect(function () { return (0, validator_1.validateCV)(invalidCV); }).toThrow('Invalid CV data');
            var invalidCV2 = {
                filePath: '/path/to/cv.pdf',
                fileType: ''
            };
            expect(function () { return (0, validator_1.validateCV)(invalidCV2); }).toThrow('Invalid CV data');
        });
    });
    describe('validateCandidateData', function () {
        it('should validate correct candidate data', function () {
            var candidateData = {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '612345678',
                address: '123 Main St',
                educations: [{
                        institution: 'University',
                        title: 'BSc',
                        startDate: '2020-01-01',
                        endDate: '2023-01-01'
                    }],
                workExperiences: [{
                        company: 'Company',
                        position: 'Developer',
                        startDate: '2020-01-01',
                        endDate: '2023-01-01'
                    }],
                cv: {
                    filePath: '/path/to/cv.pdf',
                    fileType: 'application/pdf'
                }
            };
            expect(function () { return (0, validator_1.validateCandidateData)(candidateData); }).not.toThrow();
        });
        it('should throw an error for invalid candidate data', function () {
            var invalidCandidateData = {
                firstName: '',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '612345678',
                address: '123 Main St',
                educations: [{
                        institution: 'University',
                        title: 'BSc',
                        startDate: '2020-01-01',
                        endDate: '2023-01-01'
                    }],
                workExperiences: [{
                        company: 'Company',
                        position: 'Developer',
                        startDate: '2020-01-01',
                        endDate: '2023-01-01'
                    }],
                cv: {
                    filePath: '/path/to/cv.pdf',
                    fileType: 'application/pdf'
                }
            };
            expect(function () { return (0, validator_1.validateCandidateData)(invalidCandidateData); }).toThrow('Invalid name');
        });
    });
});
