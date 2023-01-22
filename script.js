
const apiUrl = 'https://motionless-moth-overcoat.cyclic.app/pincode'

var x = document.getElementById('data')
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpPincode = document.getElementById("inp-pincode").value;
    fetch(`${apiUrl}?Pincode=${inpPincode}`)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML =
                `
            <div class="pincode-map">
                <h3>${inpPincode}</h3>
                <div class="map-area">
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no"
                                marginheight="0" marginwidth="0"
                                src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=${data[0].Latitude},${data[0].Longitude}&amp;t=h&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="details">
                <p><span>Circle Name:</span> ${data[0].CircleName}</p>
                <p><span>Region Name:</span> ${data[0].RegionName}</p>
                <p><span>District:</span> ${data[0].District}</p>
                <p><span>Division Name:</span> ${data[0].DivisionName}</p>
                <p><span>Office Name:</span> ${data[0].OfficeName}</p>
                <p><span>Delivery/Non-Delivery:</span> ${data[0].Delivery}</p>
                <p><span>State Name:</span> ${data[0].StateName}</p>
                <p><span>Longitude:</span> ${data[0].Longitude}</p>
                <p><span>Latitude:</span> ${data[0].Latitude}</p>
            </div>
            `;
            console.log(data)
        })
        .catch((error) => {
            result.innerHTML = `<h2>This pincode belongs to a village or locality. And the API does not have the data for it yet.<h2>`
            
        })
})

var inpPincode = document.getElementById("inp-pincode")

inpPincode.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search-btn").click();
    }
});

window.onload = function () {
    document.getElementById("inp-pincode").focus();
}





