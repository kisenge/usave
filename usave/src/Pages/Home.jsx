import React from "react";
import earth from '../Media/earth.png'; // relative path to image



function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-auto">

                    <div class="col-lg-12">
                        <h1 class="font-weight-bold">Welcome To USave</h1>
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="earth"
                            alt=""
                        />
                    </div>

                    <div class="center-container">
                        <div class="col-lg-4">
                            <p>
                                What brand is your car?
            </p>
                           

                            <form>
                                <div class="form-row align-items-center">
                                    <div class="col-auto my-1">
                                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect1">
                                            <option selected>Choose...</option>
                                            <option value="1">Acura</option>
                                            <option value="2">Audi</option>
                                            <option value="3">BMW</option>
                                            <option value="4">Buik</option>
                                            <option value="5">Cheverolet</option>
                                            <option value="6">Chrysler</option>
                                            <option value="7">Dodge</option>
                                            <option value="8">Ford</option>
                                            <option value="9">GMC</option>
                                            <option value="10">Honda</option>
                                            <option value="11">Hyundai</option>
                                            <option value="12">Jeep</option>
                                            <option value="13">Mazda</option>
                                            

                                        </select>
                                    </div>

                                </div>
                            </form>

                        </div>


                        <div class="col-lg-4">
                            <p>
                                What year is your car?
            </p>
                           



                            <form>
                                <div class="form-row align-items-center">
                                    <div class="col-auto my-1">
                                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect2">
                                            <option selected>Choose...</option>
                                            <option value="1">2000</option>
                                            <option value="2">2001</option>
                                            <option value="3">2002</option>
                                            <option value="4">2003</option>
                                            <option value="5">2004</option>
                                            <option value="6">2005</option>
                                            <option value="7">2006</option>
                                            <option value="8">2007</option>
                                            <option value="9">2008</option>
                                            <option value="10">2009</option>
                                            <option value="11">2010</option>
                                            <option value="12">2011</option>
                                            
                                            <option value="13">2012</option>
                                            <option value="14">2013</option>
                                            <option value="15">2014</option>
                                            <option value="16">2015</option>
                                            <option value="17">2016</option>
                                            <option value="18">2017</option>
                                            <option value="19">2018</option>
                                            <option value="20">2019</option>
                                           
                                        </select>
                                    </div>
                                    
                                </div>
                            </form>



                        </div>







                        <div class="col-lg-4">

                            <form>
                                <div class="form1">
                                    <label for="carMake">What is your car make?</label>
                                    <input type="text" class="form-control" id="carMake" aria-describedby="carMake" placeholder="enter"/>
                                        
              </div>
            </form>

          </div>

                        </div>



                        <div class="buttoncontainer">
                            <div class="col-lg-12">
                                <div class="col text-center">
                                    <a class="btn btn-outline-info" href="/Pages/Home" role="button">Option 1</a>
                                    
                                    
            </div>
                                </div>
                            </div>



                            <div class="bottomcontainer">
                                <div class="col-lg-12">
                                    <h1 class="font-weight-bold">OR</h1>
                                    <p>Select vehicle type if you are unable to find car make?</p>

                                   /* Pickups,SUVS(9.4L/100km), Midsize(5L/100km)*/



                <form>
                                        <div class="form-row align-items-center">
                                            <div class="col-auto my-1">
                                                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect3">
                                                    <option selected>Choose...</option>
                                                    <option value="1">Pickup Truck/SUV</option>
                                                    <option value="2">Midsize</option>
                                                </select>
                                            </div>
                                           
                                                <div class="col-auto my-1">
                                                    <a class="btn btn-outline-info" href="/Pages/LoggerStart" role="button">Option 2</a>
                                                    
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