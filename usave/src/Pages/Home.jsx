import React from "react";

function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-auto">

                    <div class="col-lg-12">
                        <h1 class="font-weight-bold">Welcome To USave</h1>
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="/earth.png"
                            alt=""
                        />
                    </div>

                    <div class="center-container">
                        <div class="col-lg-4">
                            <p>
                                What brand is your car?
            </p>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
              </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Acura</a>
                                    <a class="dropdown-item" href="#">Audi</a>
                                    <a class="dropdown-item" href="#">BMW</a>
                                    <a class="dropdown-item" href="#">Buik</a>
                                    <a class="dropdown-item" href="#">Chevrolet</a>
                                    <a class="dropdown-item" href="#">Chrysler</a>
                                    <a class="dropdown-item" href="#">Dodge</a>
                                    <a class="dropdown-item" href="#">Ford</a>
                                    <a class="dropdown-item" href="#">GMC</a>
                                    <a class="dropdown-item" href="#">Honda</a>
                                    <a class="dropdown-item" href="#">Hyundai</a>
                                    <a class="dropdown-item" href="#">Jeep</a>
                                    <a class="dropdown-item" href="#">Mazda</a>


                                </div>
                            </div>

                        </div>


                        <div class="col-lg-4">
                            <p>
                                What year is your car?
            </p>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
              </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">2000</a>
                                    <a class="dropdown-item" href="#">2001</a>
                                    <a class="dropdown-item" href="#">2002</a>
                                    <a class="dropdown-item" href="#">2003</a>
                                    <a class="dropdown-item" href="#">2004</a>
                                    <a class="dropdown-item" href="#">2005</a>
                                    <a class="dropdown-item" href="#">2006</a>
                                    <a class="dropdown-item" href="#">2007</a>
                                    <a class="dropdown-item" href="#">2008</a>
                                    <a class="dropdown-item" href="#">2009</a>
                                    <a class="dropdown-item" href="#">2010</a>
                                    <a class="dropdown-item" href="#">2011</a>
                                    <a class="dropdown-item" href="#">2012</a>
                                    <a class="dropdown-item" href="#">2013</a>
                                    <a class="dropdown-item" href="#">2014</a>
                                    <a class="dropdown-item" href="#">2015</a>
                                    <a class="dropdown-item" href="#">2016</a>
                                    <a class="dropdown-item" href="#">2017</a>
                                    <a class="dropdown-item" href="#">2018</a>
                                    <a class="dropdown-item" href="#">2019</a>
                                    <a class="dropdown-item" href="#">2020</a>

                                </div>
                            </div>



                        </div>







                        <div class="col-lg-4">

                            <form>
                                <div class="form">
                                    <label for="carMake">What is your car make?</label>
                                    <input type="text" class="form-control" id="carMake" aria-describedby="carMake" placeholder="">
                                        <small id="emailHelp" class="form-text text-muted">Its probably a pretty cool car.</small>
              </div>
            </form>

          </div>

                        </div>



                        <div class="buttoncontainer">
                            <div class="col-lg-12">
                                <div class="col text-center">
                                    <a class="btn btn-outline-info" href="/Pages/LoggerStart" role="button">Link</a>
                                    <button class="btn btn-outline-info" type="submit">Option 1</button>
                                    <input class="btn btn-outline-info" type="button" value="Input">
            </div>
                                </div>
                            </div>



                            <div class="bottomcontainer">
                                <div class="col-lg-12">
                                    <h1 class="font-weight-bold">OR</h1>
                                    <p>Select vehicle type if you are unable to find car make?</p>

                                    <!-- Pickups,SUVS(9.4L/100km), Midsize(5L/100km)  -->



                <form>
                                        <div class="form-row align-items-center">
                                            <div class="col-auto my-1">
                                                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option selected>Choose...</option>
                                                    <option value="1">Pickup Truck/SUV</option>
                                                    <option value="2">Midsize</option>
                                                </select>
                                            </div>
                                            <div class="col-auto my-1">
                                                <div class="custom-control custom-checkbox mr-sm-2">
                                                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
                                                        <label class="custom-control-label" for="customControlAutosizing">Remember my preference</label>
      </div>
                                                </div>
                                                <div class="col-auto my-1">
                                                    <a class="btn btn-outline-info" href="/Pages/LoggerStart" role="button">Link</a>
                                                    <button class="btn btn-outline-info" type="submit">Option 2</button>
                                                    <input class="btn btn-outline-info" type="button" value="Input">
    </div>
                                                </div>
</form>














                                        </div>
          </div>







                                </div>
                            </div>
                        </div>
  );
}

export default Home;