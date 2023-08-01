
import './App.css';
import { BsBell, BsBrightnessAltHigh, BsBrightnessHigh, BsCollection, BsCollectionFill, BsCollectionPlay, BsEnvelopeOpen, BsFacebook, BsFileEarmarkArrowUp, BsFillBellFill, BsGlobe, BsLightning, BsSearch, BsShieldLock, BsSunFill } from "react-icons/bs";

function App() {
  return (
  <><nav class=" navbar  navbar-expand-lg  bg-dark">
      <a class="navbar-brand text-white" href="#">T-wind</a>
      <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <BsEnvelopeOpen /> Dashboards
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <BsCollection /> Apps
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <BsGlobe /> UI Kit
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <BsFileEarmarkArrowUp /> Pages
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <BsShieldLock /> Authentication
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li>
            <div class="b ">
              <div class="form-group has-search">
                <span class="fa fa-search  form-control-feedback   "></span>
                <input type="text" class="form-control bg-dark" placeholder="Search..." />


              </div>
            </div>
          </li>
          <li>
            <div class="c text-white"><BsBrightnessHigh /></div>
          </li>
          <li>

            <div class=" a text-white"><BsBell /></div>

          </li>
          <li>
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="..." class="rounded-circle d "></img>
          </li>
          <li>
            <div class=" k text-white">Maria Gibson</div>
            <div class=" k text-white">admin</div>
          </li>
        </ul>



      </div>


    </nav>
    
    <div class="container-fluied">
      <div>
        <h4 class="text-black"><b>Blogs</b></h4>
        <h6>T-wind &nbsp;/  &nbsp;Pages &nbsp;/ &nbsp;Blogs</h6></div>
      <div> <button className=' n btn btn-primary '> create new</button></div>
      </div>
      <div class="container-fluied">
        <div class="row row-cols-12  ">
          <div class="col-sm-3  ">
            <div class="card w">
              <img class="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt="Card image cap" />
              <div class="card-body w">
                <span class="badge bg-success text-lime">fashion</span>
                <h5 class="card-title">popular admin templete you can use for your business</h5>
                <p class="card-text">it is a long estabished fact that a reader will be distracted by the readable contact.</p>
                <div class =" f"><img src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt=" " class="smallpic"/>
                  <div class="h">
                    <p><b>&nbsp;&nbsp;&nbsp;Fitbit incorporation</b></p>
                    <p class="san">&nbsp;&nbsp;&nbsp;san Diego,california</p>
                  </div>
                  <div class="l"><a href="#"> Read More &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 ">
            <div class="card w">
              <img class="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt="Card image cap" />
              <div class="card-body w">
                <span class="badge bg-success text-color-lime">fashion</span>
                <h5 class="card-title">popular admin templete you can use for your business</h5>
                <p class="card-text">it is a long estabished fact that a reader will be distracted by the readable contact.</p>
                <div class =" f"><img src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt=" " class="smallpic"/>
                  <div class="h">
                    <p><b>&nbsp;&nbsp;&nbsp;Fitbit incorporation</b></p>
                    <p class="san">&nbsp;&nbsp;&nbsp;san Diego,california</p>
                  </div>
                  <div class="l"><a href="#"> Read More &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div class="col-sm-3">
            <div class="card w">
              <img class="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt="Card image cap" />
              <div class="card-body w">
                <span class="badge bg-success text-color-lime">fashion</span>
                <h5 class="card-title">popular admin templete you can use for your business</h5>
                <p class="card-text">it is a long estabished fact that a reader will be distracted by the readable contact.</p>
                <div class =" f"><img src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt=" " class="smallpic"/>
                  <div class="h">
                    <p><b>&nbsp;&nbsp;&nbsp;Fitbit incorporation</b></p>
                    <p class="san">&nbsp;&nbsp;&nbsp;san Diego,california</p>
                  </div>
                  <div class="l"><a href="#"> Read More &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card w">
              <img class="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt="Card image cap" />
              <div class="card-body w">
                <span class="badge bg-success text-color-lime">fashion</span>
                <h5 class="card-title">popular admin templete you can use for your business</h5>
                <p class="card-text">it is a long estabished fact that a reader will be distracted by the readable contact.</p>
                <div class =" f"><img src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt=" " class="smallpic"/>
                  <div class="h">
                    <p><b>&nbsp;&nbsp;&nbsp;Fitbit incorporation</b></p>
                    <p class="san">&nbsp;&nbsp;&nbsp;san Diego,california</p>
                  </div>
                  <div class="l"><a href="#"> Read More &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="row row-cols-12  ">
          <div class="col-sm-3  ">
            <div class="card w">
              <img class="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt="Card image cap" />
              <div class="card-body w">
                <span class="badge bg-success text-color-lime">fashion</span>
                <h5 class="card-title">popular admin templete you can use for your business</h5>
                <p class="card-text">it is a long estabished fact that a reader will be distracted by the readable contact.</p>
                <div class =" f"><img src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt=" " class="smallpic"/>
                  <div class="h">
                    <p><b>&nbsp;&nbsp;&nbsp;Fitbit incorporation</b></p>
                    <p class="san">&nbsp;&nbsp;&nbsp;san Diego,california</p>
                  </div>
                  <div class="l"><a href="#"> Read More &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 ">
            <div class="card w">
              <img class="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt="Card image cap" />
              <div class="card-body w">
                <span class="badge bg-success text-color-lime">fashion</span>
                <h5 class="card-title">popular admin templete you can use for your business</h5>
                <p class="card-text">it is a long estabished fact that a reader will be distracted by the readable contact.</p>
                <div class =" f"><img src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt=" " class="smallpic"/>
                  <div class="h">
                    <p><b>&nbsp;&nbsp;&nbsp;Fitbit incorporation</b></p>
                    <p class="san">&nbsp;&nbsp;&nbsp;san Diego,california</p>
                  </div>
                  <div class="l"><a href="#"> Read More &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div class="col-sm-3">
            <div class="card w">
              <img class="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt="Card image cap" />
              <div class="card-body w">
                <span class="badge bg-success text-color-lime">fashion</span>
                <h5 class="card-title">popular admin templete you can use for your business</h5>
                <p class="card-text">it is a long estabished fact that a reader will be distracted by the readable contact.</p>
                <div class =" f"><img src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt=" " class="smallpic"/>
                  <div class="h">
                    <p><b>&nbsp;&nbsp;&nbsp;Fitbit incorporation</b></p>
                    <p class="san">&nbsp;&nbsp;&nbsp;san Diego,california</p>
                  </div>
                  <div class="l"><a href="#"> Read More &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card w">
              <img class="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt="Card image cap" />
              <div class="card-body w">
                <span class="badge bg-success text-color-lime">fashion</span>
                <h5 class="card-title">popular admin templete you can use for your business</h5>
                <p class="card-text">it is a long estabished fact that a reader will be distracted by the readable contact.</p>
                <div class =" f"><img src="https://images.news18.com/ibnlive/uploads/2022/02/2022-ktm-duke-890-16447590714x3.jpg" alt=" " class="smallpic"/>
                  <div class="h">
                    <p><b>&nbsp;&nbsp;&nbsp;Fitbit incorporation</b></p>
                    <p class="san">&nbsp;&nbsp;&nbsp;san Diego,california</p>
                  </div>
                  <div class="l"><a href="#"> Read More &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
</div>
</div>
</div>
        </div></>
        );
        }

        export default App;
      
