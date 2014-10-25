function validateProjectCreateForm() {

    var result = true;

    //validate project name
    var projectNameFormGroup = $('#projectNameGroup');
    if (!validateText($("#projectName").val())) {
        markAsError(projectNameFormGroup);
        result = false;
    }
    else {
        markAsCorrect(projectNameFormGroup)
    }

    //validate project code
    var projectCodeFormGroup = $('#projectCodeGroup');
    if (!validateText($("#projectCode").val())) {
        markAsError(projectCodeFormGroup);
        result = false;
    }
    else {
        markAsCorrect(projectCodeFormGroup);
    }

    if (result == true) {
        $('#addProjectForm').submit();
    }
    return result;
}

function validateIssueCreateForm() {
    var result = true;

    //validate issues name
    var issueNameFormGroup = $('#issueNameGroup');
    if (!validateText(issueNameFormGroup.find('#issueName').val())) {
        markAsError(issueNameFormGroup);
        result = false;
    } else {
        markAsCorrect(issueNameFormGroup);
    }

    //validate description
    var issueDescriptionFormGroup = $('#issueDescriptionGroup');
    if (!validateText(issueDescriptionFormGroup.find('#issueDescription').val())) {
        markAsError(issueDescriptionFormGroup);
        result = false;
    } else {
        markAsCorrect(issueDescriptionFormGroup);
    }


    if (result == true) {
        $('#addIssueForm').submit();
    }
    return result;
}

function validateFeedbackForm() {
    var result = true;

    //validate topic request
    var topicRequestFormGroup = $('#topicRequestGroup');
    if (!validateText(topicRequestFormGroup.find('#inputTopic').val())) {
        markAsError(topicRequestFormGroup);
        result = false;
    } else {
        markAsCorrect(topicRequestFormGroup);
    }

    //validate request
    var requestDescriptionFormGroup = $('#requestDescriptionGroup');
    if (!validateText(requestDescriptionFormGroup.find('#inputText').val())) {
        markAsError(requestDescriptionFormGroup);
        result = false;
    } else {
        markAsCorrect(requestDescriptionFormGroup);
    }

    //validate email
    var emailFormGroup = $('#emailGroup');
    if (!validateEmail(emailFormGroup.find('#inputEmail').val())) {
        markAsError(emailFormGroup);
        result = false;
    } else {
        markAsCorrect(emailFormGroup);
    }

    if (result == true) {
        $('#feedbackForm').submit();
    }

    return result;
}

function validateProjectModifyForm() {
    var result = true;

    //validate project name
    var projectNameFormGroup = $('#projectNameGroup');

    if (!validateText($("#projectName").val())) {
        markAsError(projectNameFormGroup);
        result = false;
    }
    else {
        markAsCorrect(projectNameFormGroup)
    }

    //validate project code
    var projectCodeFormGroup = $('#projectCodeGroup');
    if (!validateText($("#projectCode").val())) {
        markAsError(projectCodeFormGroup);
        result = false;
    }
    else {
        markAsCorrect(projectCodeFormGroup);
    }

    if (result == true) {
        $('#modifyProjectForm').submit();
    }
    return result;
}

function switchToModify(formId) {
    var form = $("#" + formId);
    form.find('input').show();
    $('#submitButton').show();
    $('#cancelButton').show();
    $('#modifyButton').hide();
    $('.attributeValues.editable').hide();
}

function cancelModify(formId) {
    var form = $("#" + formId);
    form.find('input').hide();
    $('#submitButton').hide();
    $('#cancelButton').hide();
    $('#modifyButton').show();
    $('.attributeValues.editable').show();
    resetForm(formId);
}


function validateText(text) {
    if (text.trim() == "" || text == null)
        return false;
    else return true;
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function markAsError(formGroup) {
    if (!formGroup.hasClass('has-error has-feedback')) {
        formGroup.addClass('has-error has-feedback');
        formGroup.find('.form-control-feedback').animate({height: 'show'}, 90);
        formGroup.find('.alert').animate({height: 'show'}, 90);
    }
}

function markAsCorrect(formGroup) {
    if (formGroup.hasClass('has-error has-feedback')) {
        formGroup.removeClass('has-error has-feedback');
        formGroup.find('.alert').animate({height: 'hide'}, 90);
        formGroup.find('.form-control-feedback').hide();
    }
}

function switchTab(infoId, tabId) {
    $('.infoTab').hide();
    $("#" + infoId).show();
    $('.nav-tabs li').removeClass('active');
    $("#" + tabId).addClass('active');
    cancelModify('modifyProjectForm');
}

function resetForm(formId) {
    var form = $("#" + formId);
    form.find('input').each(function (index) {
        $(this).val($(this).attr('value'));
    });

    form.find('select option').prop('selected', function () {
        return this.defaultSelected;
    })

    form.find('textarea').each(function (index) {
        $(this).val($(this).html());
    })


    form.find('.form-group').removeClass('has-error has-feedback');
    form.find('.alert').hide();
    form.find('.form-control-feedback').hide();
}

function resetFeedbackForm() {
    markAsCorrect($('#topicRequestGroup'));
    markAsCorrect($('#requestDescriptionGroup'));
    markAsCorrect($('#emailGroup'));
}

function resizeTextarea(textareaId) {
    var text = document.getElementById(textareaId);
    text.style.height = 'auto';
    text.style.height = (text.scrollHeight + 5) + 'px';
}

function switchToModifyIssue(formId, text) {
    $("#" + text).hide();
    $("#" + formId).show();
    resizeTextarea('issueDescription');
    $("#submitButton").show();
    $("#cancelButton").show();
    $("#modifyButton").hide();
}

function cancelModifyIssue(formId, text) {
    resetForm(formId);
    resizeTextarea('issueDescription');
    $("#" + text).show();
    $("#" + formId).hide();
    $("#submitButton").hide();
    $("#cancelButton").hide();
    $("#modifyButton").show();
}

function submitModifyIssue() {
    var result = true;

    if (!validateText($("#issueDescription").val())) {
        markAsError($("#issueDescriptionGroup"));
        result = false;
    }
    if (result == true) {
        $("#issueForm").submit();
    }
}

function validateCommentForm() {
    var result = true;
    if(!validateText($("#commentText").val())) {
        markAsError($("#commentGroup"));
        result = false;
    }

    console.log(result);

    if(result == true) {
        $("#commentForm").submit();
    }
    return result;
}
