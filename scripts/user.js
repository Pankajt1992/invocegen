function renderUserListGrid(el) {
    if ($(el).length > 0) {
        var userTable = $(el).DataTable({
            "processing": true,
            "serverSide": true,
            "ajax": APP.site + "/ajax.php?action=userList",
            "aoColumns": [{
                "sTitle": "Name",
                "sWidth": "25%",
                "mDataProp": "full_name",
                "sType": "string"
            }, {
                "sTitle": "Email ID",
                "sWidth": "31%",
                "mDataProp": "email_id",
                "sType": "string"
            }, {
                "sTitle": "Username",
                "sWidth": "18%",
                "mDataProp": "username",
                "sType": "string"
            }, {
                "sTitle": "Status",
                "sWidth": "12%",
                "mDataProp": "active_in",
                "sType": "string",
                "render": function(data, type, row) {
                    return data == 1 ? '<span style="color:green;">Active</span>' : '<span style="color:red;">Inactive</span>';
                }
            }, {
                "sTitle": "Access Level",
                "sWidth": "12%",
                "mDataProp": "access_level",
                "sType": "string",
                "render": function(data, type, row) {
                    var accessLevel = {
                        "1": "Admin",
                        "2": "End User"
                    }
                    return accessLevel[data];
                }
            }]
        });
    }
}