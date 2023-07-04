function BigProject() {



    return (
        <div>

            <div className="bigprojectCard">
                <div className="shadowBigProject">

                    <a href='https://leahxinli.com/projects/iot-weather/' className="bigprojectA">
                        <img src="photos/projects/Iotweather.png" className="bigprojectPhoto" alt='The front page of IOT weather' />
                        <h2 className="bigprojectTitle cavent">IoT Weather
                        </h2>
                    </a>
                </div>
                <p className="bigprojectDesc crimson">Wi-Fi weather station using NodeMCU (a ESP8266 development board) to read temperature and barometric pressure with a BMP280 and send it to a HTTP endpoint using PHP to log data.I created the whole front end.</p>
            </div>

        </div>
    );
}
export default BigProject;