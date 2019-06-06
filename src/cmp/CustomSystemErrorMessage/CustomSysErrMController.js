action.setCallback(this, function(resp) {
if (resp.getState() === “SUCCESS”) {

     component.set(“v.messageType”, ‘success’ );
component.set(“v.message”, ‘Completed Successfully!’ );
}
else if (resp.getState() === “ERROR”) {

     component.set(“v.messageType”, ‘error’ );
var errors = resp.getError();
if (errors) {
if (errors[0] && errors[0].message) {
component.set(“v.message”,errors[0].message );//Fetching Custom Message.
        }
}
else {
component.set(“v.message”, ‘Request Failed!’ );
}
}
});
