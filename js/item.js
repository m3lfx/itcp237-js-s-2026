$(document).ready(function () {
    const url = 'http://192.168.1.28:8000'

    $('#itable').DataTable({
        ajax: {
            url: `${url}/api/v1/items`,
            dataSrc: '',
            // headers: {
            //     "Authorization": "Bearer " + access_token 
            // },
        },
        dom: 'Bfrtip',
        buttons: [
            'pdf',
            'excel',
            {
                text: 'Add item',
                className: 'btn btn-primary',
                action: function (e, dt, node, config) {
                    $("#iform").trigger("reset");
                    $('#itemModal').modal('show');
                    $('#itemUpdate').hide();
                    $('#itemImage').remove()
                }
            }
        ],
        columns: [
            { data: 'item_id' },
            {
                data: null,
                render: function (data, type, row) {
                    return `<img src="${url}/${data.img_path}" width="50" height="60">`;
                }
            },

            { data: 'description' },
            { data: 'cost_price' },
            { data: 'sell_price' },
            { data: 'stock.quantity' },
            {
                data: null,
                render: function (data, type, row) {
                    return "<a href='#' class = 'editBtn' id='editbtn' data-id=" + data.item_id + "><i class='fas fa-edit' aria-hidden='true' style='font-size:24px' ></i></a><a href='#'  class='deletebtn' data-id=" + data.item_id + "><i  class='fas fa-trash-alt' style='font-size:24px; color:red' ></a></i>";
                }
            }
        ],
    });
})