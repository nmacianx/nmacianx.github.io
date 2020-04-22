
$('#portfolioModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var project = button.data('project');
    var modal = $(this);
    var title = getTitle(project);
    modal.find('.modal-title').text(title);
});

function customScroll(id, speed, padding = 0 ){
    $('html, body').animate({
        scrollTop: $(id).offset().top - padding
    }, speed);
}


$('#attributes').tooltip();

function getTitle(project){
    // console.log(project);
    switch (project) {
        case 'zabmakerstable':
            return 'Z. Alexander Brown';
        default:
            return 'Proyecto';
    }
}

function showMore(){
    document.getElementById("portfolio-row-3").removeAttribute('data-hidden');
    document.getElementById("one-more-button").setAttribute('data-hidden', true);
    customScroll('#portfolio-row-3',700, 50);
}

function showMoreCourses(){
    document.getElementById("education-row-3").removeAttribute('data-hidden');
    document.getElementById("education-row-4").removeAttribute('data-hidden');
    document.getElementById("education-row-5").removeAttribute('data-hidden');
    document.getElementById("three-more-button").setAttribute('data-hidden', true);
    customScroll('#education-row-3',700, 50);
    // document.getElementById("education-row-3").scrollIntoView({behavior: "smooth"});
}

