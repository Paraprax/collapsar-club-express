/* DATA 
Below data will hold all of the reserved booths, 
initially containing only a placeholder example customer
*/

var tableArray = [
    {
        customerName: "Gorlak",
        customerEmail: "gorlak_the_krogan@tuchanka.net",
        customerID: "kfhakor21",
        phoneNumber: "777-451-0926"
    }
];

/*make the above info accessible to other files in the app
if they use 'require' on to import it*/
module.exports = tableArray;