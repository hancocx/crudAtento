// <reference path="jquery-1.9.1.intellisense.js" />

// Load Data in Table when document is ready
$(document).ready(function () {  
    loadData();
    new DataTable('#lstBooks');
});

// Load Data function
function loadData() {
    $.ajax({
        url: "/Home/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.ID + '</td>';
                html += '<td>' + item.Titulo + '</td>';
                html += '<td>' + item.Autor + '</td>';
                html += '<td>' + item.AnoPublicacion + '</td>';
                html += '<td>' + item.Genero + '</td>';
                html += '<td>' + item.Precio + '</td>';
                html += '<td><a href="#" onclick="return getbyID(' + item.ID + ')">Edit</a> | <a href="#" style="color:#FF0000; onclick="Delele(' + item.ID + ')">Delete</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

// Add Data Function
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var libObj = {
        ID: $('#BookID').val(),
        Titulo: $('#Titulo').val(),
        Autor: $('#Autor').val(),
        AnoPublicacion: $('#AnoPublicacion').val(),
        Genero: $('#Genero').val(),
        Precio: $('#Precio').val()
    };
    $.ajax({
        url: "/Home/Add",
        data: JSON.stringify(libObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

// Function for getting the Data Based upon Employee ID
function getbyID(ID) {
    $('#Titulo').css('border-color', 'lightgrey');
    $('#Autor').css('border-color', 'lightgrey');
    $('#AnoPublicacion').css('border-color', 'lightgrey');
    $('#Genero').css('border-color', 'lightgrey');
    $('#Precio').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Home/getById/" + ID,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#BookID').val(result.ID);
            $('#Titulo').val(result.Titulo);
            $('#Autor').val(result.Autor);
            $('#AnoPublicacion').val(result.AnoPublicacion);
            $('#Genero').val(result.Genero);
            $('#Precio').val(result.Precio);

            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}

// Function for updating employee's record
function Update() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var libObj = {
        ID: $('#BookID').val(),
        Titulo: $('#Titulo').val(),
        Autor: $('#Autor').val(),
        AnoPublicacion: $('#AnoPublicacion').val(),
        Genero: $('#Genero').val(),
        Precio: $('#Precio').val(),
    };
    $.ajax({
        url: "/Home/Update",
        data: JSON.stringify(libObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
            $('#BookID').val("");
            $('#Titulo').val("");
            $('#Autor').val("");
            $('#AnoPublicacion').val("");
            $('#Genero').val("");
            $('#Precio').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

// Function for deleting employee's record
function Delele(ID) {
    var ans = confirm("¿Estás seguro que quieres eliminar este registro?");
    if (ans) {
        $.ajax({
            url: "/Home/Delete/" + ID,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                loadData();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}

// Function for clearing the textboxes
function clearTextBox() {
    $('#BookID').val("");
    $('#Titulo').val("");
    $('#Autor').val("");
    $('#AnoPublicacion').val("");
    $('#Genero').val("");
    $('#Precio').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#Titulo').css('border-color', 'lightgrey');
    $('#Autor').css('border-color', 'lightgrey');
    $('#AnoPublicacion').css('border-color', 'lightgrey');
    $('#Genero').css('border-color', 'lightgrey');
    $('#Precio').css('border-color', 'lightgrey');
}

// Valdidation using jquery
function validate() {
    var isValid = true;
    if ($('#Titulo').val().trim() == "") {
        $('#Titulo').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Titulo').css('border-color', 'lightgrey');
    }
    if ($('#Autor').val().trim() == "") {
        $('#Autor').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Autor').css('border-color', 'lightgrey');
    }
    if ($('#AnoPublicacion').val().trim() == "") {
        $('#AnoPublicacion').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#AnoPublicacion').css('border-color', 'lightgrey');
    }
    if ($('#Genero').val().trim() == "") {
        $('#Genero').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Genero').css('border-color', 'lightgrey');
    }
    if ($('#Precio').val().trim() == "") {
        $('#Precio').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Precio').css('border-color', 'lightgrey');
    }
    return isValid;
}