<template>
  <div>
    <!--    Start Navbar -->
    <div class="container-fluid m-0 p-0">
      <div class="row ms-0 me-0">
        <div class="row navigation">
          <div class="navbar-collapse d-flex justify-content-center">
            <ul class="navbar-nav h4 flex-row pt-3 pb-3">
              <li class="nav-item">
                <router-link :to="{ path: '/' }" class="nav-link ps-3 pe-3">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ path: '/about-us' }" class="nav-link ps-3 pe-3">Despre noi</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ path: '/locksmith-near-me' }" class="nav-link ps-3 pe-3 fw-bold">Zone acoperite</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row navigation pt-2 pb-2">
        <div class="col-12 col-lg-6">
          <div class="navigation pt-3 pb-3">
            <router-link :to="{ path: '/' }" class="navbar-brand">
              <img src="../assets/logo.png" class="logo" alt="logo">
            </router-link>
          </div>
        </div>
        <div class="col-12 col-lg-6 align-self-center">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-6 pt-lg-0 align-self-center">
              <div class="navbar-collapse px-5 d-flex justify-content-center navbar-nav pt-3 pt-lg-0">
                <div class="nav-item hero-nav-phone align-self-center">
                  <a href="tel:01173256595" class="nav-link phone ps-3 pe-3">Call us now! <br/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    End Navbar-->
    <router-view></router-view>
    <!--    Start Footer -->
    <div class="footer mt-3">
      <footer class="section footer-classic context-dark bg-image pt-4" style="background: #2d3246;">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 text-start">
              <div class="pr-xl-4">
                <a class="brand" href="#"><img class="brand-logo-light" src="@/assets/logo.png" alt="logo"></a>
                <p>Oferim servicii de lăcătuș de cea mai bună calitate cu mai multe echipe situate în apropierea dumneavoastră, serviciile noastre includ servicii pentru afaceri, servicii de urgență, servicii 24/7, cu noi veți primi servicii de lăcătuș de încredere în cel mai urgent mod.</p>
              </div>
            </div>
            <div class="d-md-none"><hr/></div>
            <div class="col-sm-12 col-md-6 align-self-center text-end">
              <ul class="contact-list">
<!--                <li>ADDRESS: <span>Uk Local Services Ltd 89 Brent Street</span></li>-->
<!--                <li>EMAIL: <a href="mailto:#"><span>office@uklocallocksmith.co.uk</span></a></li>-->
                <li>PHONE: <a href="tel:01173256595"><span>01173256595</span></a></li>
              </ul>
            </div>
          </div>
          <hr>
          <div class="row pt-3">
            <p class="rights"><span>©  </span><span class="copyright-year">2022</span><span> </span><span> Lăcătuș-în-zonă </span><span> - </span><span>Toate drepturile rezervate.</span></p>
          </div>
        </div>
      </footer>
    </div>
    <!--    End Footer -->

    <a href="https://api.whatsapp.com/send?phone=+4407733025745" class="float d-md-block d-lg-none" target="_blank">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" class="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
    </a>
    <a href="tel:01173256595" class="float-phone d-md-block d-lg-none">
      <font-awesome-icon icon="phone-alt" class="fa-phone"></font-awesome-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style lang="scss" scoped>
  .logo {
    width: 250px;
  }
  .navigation {
    padding: 0;
    margin: 0;
    background: $ourBlack;
    ul {
      line-height: 1em;
      li {
        font-size: 16px;
        text-transform: uppercase;
        a {
          color: #fff;
          padding: 0 25px;
          font-weight: 600;
        }
      }
    }
    .navbar-nav {
      flex-direction: row;
      .nav-link {
        color: #FFFFFF;
      }
    }
    .hero-nav-phone {
      background: $ourBlue;
      border-radius: 10px;
      padding: 3px 12px;
    }
  }
  .footer {
    a, li {
      color: #fff;
      text-decoration: none;
      span {
        color: rgba(200,200,200,0.8);
      }
    }
    p {
      color: rgba(200,200,200,0.8);
    }
    hr {
      color: #ffffff;
    }
  }
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  // WhatsApp button
  @media screen and (max-width: 700px)  {
    .crazy-row {
      width: 107%;
      margin-left: -14px;
    }
    *{padding:0;margin:0;}
    img {
      width: 100%;
      object-fit: contain;
    }
    .nav-item img {
      width: 70%;
    }
    body{
      font-family:Verdana, Geneva, sans-serif;
      font-size:18px;
      background-color:#CCC;
    }

    .float{
      position:fixed;
      width:60px;
      height:60px;
      bottom:40px;
      left:15px;
      //background-color:#0C9;
      color:#FFF;
      border-radius:50px;
      text-align:center;
      box-shadow: 2px 2px 3px #999;
    }

    .fa-whatsapp {
      fill: white;
      width: 60px;
      height: 60px;
      background: #25D366;
      border-radius: 50px;
      padding: 7px;
      border: 2px solid $ourBlack;
    }

    .float-phone {
      position:fixed;
      width:60px;
      height:60px;
      bottom:40px;
      right:40px;
      //background-color:#0C9;
      color:#FFF;
      border-radius:50px;
      text-align:center;
      box-shadow: 2px 2px 3px #999;
    }
    .fa-phone {
      fill: white;
      width: 50px;
      height: 50px;
      background: #25D366;
      border-radius: 50px;
      padding: 12px;
      border: 2px solid $ourBlack;
    }
  }
</style>