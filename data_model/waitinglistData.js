/* DATA 
Below data will hold all of the reserved booths, 
initially containing only a placeholder example customer
*/

var waitlistArray = [
    {
        customerName: "Wendra",
        customerEmail: "maiden_wendra@thessia.net",
        customerID: "asrasths79",
        phoneNumber: "777-234-0108"
    }
];

/*make the above info accessible to other files in the app
if they use 'require' on to import it*/
module.exports = waitlistArray;