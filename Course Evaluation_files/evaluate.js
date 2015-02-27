$(function () {

    $('body').on('change', 'input:radio', function () {

        var $radio = $(this);

        var name = $radio.attr('name');
        $('input:radio[name="' + name + '"]').parent('label').removeClass('btn-success');

        $radio.parent('label').addClass('btn-success');

    });

    $("#evaluation-form").on("propertychange input textInput", 'textarea[maxlength]', function () {
        var limit = this.getAttribute("maxlength");
        var remaining = limit - this.value.length;
        var $warning = $(this).next('.maxlength-warning');

        if (remaining < 50) { //place or remove warning as necessary
            $warning.text(remaining + " characters remaining");
        } else {
            $warning.empty();
        }
        
        if (remaining <= 0) {
            this.value = text.substr(0, limit);
        }
    });

    $("#evaluation-form").submit(function () {
        var totalNumericalQuestions = $(".numerical").length;
        var totalAnsweredNumericalQuestions = $('input:radio:checked').length;

        var missedNumericalQuestions = totalNumericalQuestions - totalAnsweredNumericalQuestions;
        var confirmText = "You didn't answer any of the multiple choice questions. Are you sure you want to submit?";
        if (missedNumericalQuestions == totalNumericalQuestions) {
            return confirm(confirmText);
        }
    });
});