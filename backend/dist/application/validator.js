"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCandidateData = void 0;
var NAME_REGEX = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
var EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var PHONE_REGEX = /^(6|7|9)\d{8}$/;
var DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
//Length validations according to the database schema
var validateName = function (name) {
    if (!name || name.length < 2 || name.length > 100 || !NAME_REGEX.test(name)) {
        throw new Error('Invalid name');
    }
};
var validateEmail = function (email) {
    if (!email || !EMAIL_REGEX.test(email)) {
        throw new Error('Invalid email');
    }
};
var validatePhone = function (phone) {
    if (phone && !PHONE_REGEX.test(phone)) {
        throw new Error('Invalid phone');
    }
};
var validateDate = function (date) {
    if (!date || !DATE_REGEX.test(date)) {
        throw new Error('Invalid date');
    }
};
var validateAddress = function (address) {
    if (address && address.length > 100) {
        throw new Error('Invalid address');
    }
};
var validateEducation = function (education) {
    if (!education.institution || education.institution.length > 100) {
        throw new Error('Invalid institution');
    }
    if (!education.title || education.title.length > 100) {
        throw new Error('Invalid title');
    }
    validateDate(education.startDate);
    if (education.endDate && !DATE_REGEX.test(education.endDate)) {
        throw new Error('Invalid end date');
    }
};
var validateExperience = function (experience) {
    if (!experience.company || experience.company.length > 100) {
        throw new Error('Invalid company');
    }
    if (!experience.position || experience.position.length > 100) {
        throw new Error('Invalid position');
    }
    if (experience.description && experience.description.length > 200) {
        throw new Error('Invalid description');
    }
    validateDate(experience.startDate);
    if (experience.endDate && !DATE_REGEX.test(experience.endDate)) {
        throw new Error('Invalid end date');
    }
};
var validateCV = function (cv) {
    if (typeof cv !== 'object' || !cv.filePath || typeof cv.filePath !== 'string' || !cv.fileType || typeof cv.fileType !== 'string') {
        throw new Error('Invalid CV data');
    }
};
var validateCandidateData = function (data) {
    if (data.id) {
        // If id is provided, we are editing an existing candidate, so fields are not mandatory
        return;
    }
    validateName(data.firstName);
    validateName(data.lastName);
    validateEmail(data.email);
    validatePhone(data.phone);
    validateAddress(data.address);
    if (data.educations) {
        for (var _i = 0, _a = data.educations; _i < _a.length; _i++) {
            var education = _a[_i];
            validateEducation(education);
        }
    }
    if (data.workExperiences) {
        for (var _b = 0, _c = data.workExperiences; _b < _c.length; _b++) {
            var experience = _c[_b];
            validateExperience(experience);
        }
    }
    if (data.cv && Object.keys(data.cv).length > 0) {
        validateCV(data.cv);
    }
};
exports.validateCandidateData = validateCandidateData;
