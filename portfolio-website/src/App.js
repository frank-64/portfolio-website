import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <p class="navbar-brand">Projects Portfolio</p>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a
                href="https://www.linkedin.com/in/frankie-clipsham-355918149/"
                data-toggle="tooltip"
                title="LinkedIn"
              >
                <i class="devicon-linkedin-plain"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/frank-64"
                data-toggle="tooltip"
                title="GitHub"
              >
                <i class="fa fa-2x fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://frank-64.github.io/ToBeFrank/"
                data-toggle="tooltip"
                title="Tech Blog"
              >
                <i class="fa fa-2x fa-book"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:fclipsham@gmail.com"
                data-toggle="tooltip"
                title="Email Me"
              >
                <i class="fa fa-2x fa-envelope-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="j1 jumbotron">
        <div class="container text-center">
          <h1>Frankie Clipsham</h1>
          <p>
            Hi, I'm Frankie, a Software Developer and Computer Science graduate
            from Newcastle University.
          </p>
        </div>
      </div>
      <div class="j2 jumbotron">
        <div class="container text-center mx-auto">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div>
                <div class="jumbopanel jumbotron">
                  <h4>About Me</h4>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="panel about">
                        <div class="panel-body">
                          <img
                            class="img-responsive img-rounded center-block img-me"
                            src={process.env.PUBLIC_URL + "/images/me.jpg"}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="panel about" style={{ textAlign: "left" }}>
                        <div class="panel-body">
                          <p>Hobbies & Interests</p>
                          <ul>
                            <li>Cycling</li>
                            <li>Running/Walking</li>
                            <li>Skiing</li>
                            <li>Strength Training</li>
                            <li>Cooking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="panel about" style={{ marginBottom: 0 }}>
                        <div class="panel-body">
                          <p>
                            I am 22 years old from Richmond, North Yorkshire
                            with a great fascination for technology and STEM.
                            Currently, I have been focussing on improving my
                            full-stack experience with various projects (see
                            below).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div>
                <div class="jumbopanel jumbotron">
                  <h4>Programming Confidence</h4>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <p style={{ marginBottom: 0 }}>
                        <i class="listi devicon-csharp-plain"></i>C#
                      </p>
                      <div
                        class="progress progress_skills"
                        style={{ marginBottom: 0 }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "90%", background: "#0077b6" }}
                        ></div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <p style={{ marginBottom: 0 }}>
                        <i class="listi devicon-python-plain"></i>Python
                      </p>
                      <div
                        class="progress progress_skills"
                        style={{ marginBottom: 0 }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "80%", background: "#0077b6" }}
                        ></div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <p style={{ marginBottom: 0 }}>
                        <i class="listi devicon-javascript-plain"></i>JavaScript
                      </p>
                      <div
                        class="progress progress_skills"
                        style={{ marginBottom: 0 }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "60%", background: "#0077b6" }}
                        ></div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <p style={{ marginBottom: 0 }}>
                        <i class="listi devicon-html5-plain"></i>HTML & CSS
                      </p>
                      <div
                        class="progress progress_skills"
                        style={{ marginBottom: 0 }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "50%", background: "#0077b6" }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="c1 container-fluid bg-3 text-center"
        style={{ height: "50%" }}
      >
        <h3 style={{ marginBottom: 0 }}>
          Here are some of the projects I have been working on throughout
          university and in my free time.
        </h3>
        <br />
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>
                  <a
                    data-toggle="collapse"
                    href="#smash_panel"
                    title="Read More"
                    aria-controls="smash_panel"
                    style={{ textAlign: "right" }}
                  >
                    Movie Ranking Web App
                  </a>
                </h3>
              </div>
              <div id="smash_panel" class="collapse">
                <div class="panel-body">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "30%", background: "#0077b6" }}
                    >
                      HTML & CSS
                    </div>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "60%", background: "#0096c7" }}
                    >
                      Python
                    </div>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "10%", background: "#48cae4" }}
                    >
                      JS
                    </div>
                  </div>
                  <p>
                    Movie smash was the first project I decided to do myself, I
                    worked on this project over lockdown and the following
                    months. The concept is based on Mark Zuckerberg's Face Smash
                    which compared and ranked female students at Harvard
                    University and was the inception of Facebook. However, in
                    our Movie Smash users pick between which movie they prefer
                    this influences each movie's ranking (or elo). Movies are
                    then displayed in a table based on their ranking from
                    highest to lowest based on elo.
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <a
                        href={
                          process.env.PUBLIC_URL + "/images/Movie Smash.md.html"
                        }
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-book"></i>README Link
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://github.com/frank-64/Django-Website"
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-github"></i>GitHub
                        Repository
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="/moviesmash"
                        data-toggle="tooltip"
                        title="Project website"
                      >
                        <i class="listi fa fa-2x fa-globe"></i>Live Website
                      </a>
                    </li>
                  </ul>
                  <button
                    class="btn"
                    data-toggle="collapse"
                    data-target="#smash_div"
                  >
                    View Example
                  </button>
                  <div id="smash_div" class="collapse">
                    <img
                      class="img-responsive rounded"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/movie_smash_example.png"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>
                  <a
                    data-toggle="collapse"
                    href="#java_panel"
                    title="Read More"
                    aria-controls="java_panel"
                    style={{ textAlign: "right" }}
                  >
                    Vending Machine Applet
                  </a>
                </h3>
              </div>
              <div id="java_panel" class="collapse">
                <div class="panel-body">
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar"
                      role="progressbar"
                      style={{ width: "100%", background: "#0077b6" }}
                    >
                      Java
                    </div>
                  </div>
                  <p>
                    I started this project to further my knowledge of Java by
                    using many data structures and the Swing GUI toolkit. This
                    Applet is a GUI Vending Machine with the functionality for
                    users to select item's, view the total cost, pay and then
                    checkout. The change is returned on a successful transaction
                    with quantity and amount displayed.
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <a
                        href={
                          process.env.PUBLIC_URL +
                          "/files/Vending Machine.md.html"
                        }
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-book"></i>README Link
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://github.com/frank-64/VendingMachine"
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-github"></i>GitHub
                        Repository
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a
                        href={
                          process.env.PUBLIC_URL + "/files/VendingMachine.jar"
                        }
                        download
                      >
                        <i class="listi devicon-java-plain colored"></i>Download
                        Jar File
                      </a>
                    </li>
                  </ul>

                  <button
                    class="btn"
                    data-toggle="collapse"
                    data-target="#java_div"
                  >
                    View Example
                  </button>
                  <div id="java_div" class="collapse">
                    <img
                      class="img-responsive rounded"
                      src={process.env.PUBLIC_URL + "/images/GUI.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>
                  <a
                    data-toggle="collapse"
                    href="#child_mind_panel"
                    title="Read More"
                    aria-controls="child_mind_panel"
                    style={{ textAlign: "right" }}
                  >
                    Child Minding Website
                  </a>
                </h3>
              </div>
              <div id="child_mind_panel" class="collapse">
                <div class="panel-body">
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-info"
                      role="progressbar"
                      style={{ width: "50%", background: "#0077b6" }}
                    >
                      HTML & CSS
                    </div>
                    <div
                      class="progress-bar progress-bar-warning"
                      role="progressbar"
                      style={{ width: "25%", background: "#0096c7" }}
                    >
                      JavaScript
                    </div>
                    <div
                      class="progress-bar progress-bar-success"
                      role="progressbar"
                      style={{ width: "25%", background: "#48cae4" }}
                    >
                      PHP
                    </div>
                  </div>

                  <p>
                    This project was for my A-Level coursework in 2019. My
                    client was a childminder who required a website to replace
                    her paper-based system. I produced this website using HTML,
                    CSS, JS and PHP. The website consisted of a login and
                    registration page. Users could access a user dashboard to
                    view bookings, pay for bookings using an integrated PayPal
                    API, make bookings and alter information about their child.
                    An admin page was also implemented to manage bookings, users
                    and children as well as record child arrival times for
                    future reference.
                  </p>
                  <strong>
                    Please check out the live website and it's functionality.
                  </strong>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <a
                        href="https://github.com/frank-64/Child-Minding-Website"
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-github"></i>GitHub
                        repository
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="http://fclipsham.rscomputing.org.uk/"
                        data-toggle="tooltip"
                        title="Project website"
                      >
                        <i class="listi fa fa-2x fa-globe"></i>Live website
                      </a>
                    </li>
                  </ul>
                  <button
                    class="btn"
                    data-toggle="collapse"
                    data-target="#child_minding_div"
                  >
                    View Example
                  </button>
                  <div id="child_minding_div" class="collapse">
                    <img
                      class="img-responsive rounded"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/coursework_example.png"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>
                  <a
                    data-toggle="collapse"
                    href="#gymtracking_panel"
                    title="Read More"
                    aria-controls="java_panel"
                    style={{ textAlign: "right" }}
                  >
                    Gym Tracking Application
                  </a>
                </h3>
              </div>
              <div id="gymtracking_panel" class="collapse">
                <div class="panel-body">
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-info"
                      role="progressbar"
                      style={{ width: "45%", background: "#0077b6" }}
                    >
                      C#
                    </div>
                    <div
                      class="progress-bar progress-bar-warning"
                      role="progressbar"
                      style={{ width: "35%", background: "#0096c7" }}
                    >
                      JavaScript
                    </div>
                    <div
                      class="progress-bar progress-bar-success"
                      role="progressbar"
                      style={{ width: "20%", background: "#48cae4" }}
                    >
                      HTML & CSS
                    </div>
                  </div>
                  <p>
                    This project was for my final-year dissertation project and
                    it included the development of a web application with a .NET
                    C# backend and a React frontend. The infrastructure was all
                    hosted in Azure and CI/CD was setup with GitHub pipelines to
                    ensure quick and easy deployment. I aimed to create an
                    application that gym-goers could use to determine how busy
                    the gym is before they go. I integrated the system with a
                    Cloud-Based Access Control system that would send WebHooks
                    to my application when a user entered/exited the gym. This
                    would update the CosmosDB database and the occupancy would
                    then be reflected on the website. I received a first for
                    this project.
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <a
                        href="https://agreeable-bush-0d5fc2803.2.azurestaticapps.net/"
                        data-toggle="tooltip"
                        title="Gym Website"
                      >
                        <i class="listi fa fa-2x fa-globe"></i>Live Website
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://github.com/frank-64/GymTracker"
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-book"></i>GitHub Repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>
                  <a
                    data-toggle="collapse"
                    href="#racinggame_panel"
                    title="Read More"
                    aria-controls="java_panel"
                    style={{ textAlign: "right" }}
                  >
                    Racing Game in Unity
                  </a>
                </h3>
              </div>
              <div id="racinggame_panel" class="collapse">
                <div class="panel-body">
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar"
                      role="progressbar"
                      style={{ width: "100%", background: "#0077b6" }}
                    >
                      C#
                    </div>
                  </div>
                  <p>
                    This project was part of my final-year Game Development
                    module at University. We were tasked to create a Unity game
                    with higher marks being received for the implementation of
                    some sort of AI or adversary. Marks were also rewarded for
                    use of colliders and proof of Physics calculations instead
                    of relying on the underlying Physics engine. I decided to
                    create a racing game where you would race an AI car around
                    the track. I implemented a simple AI in which would follow
                    the waypoints around the map and attempt to overtake the
                    player. I received a first for this project.
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <a
                        href="https://github.com/frank-64/RowdyRacers"
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-book"></i>GitHub Repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>
                  <a
                    data-toggle="collapse"
                    href="#website_panel"
                    title="Read More"
                    aria-controls="java_panel"
                    style={{ textAlign: "right" }}
                  >
                    My Website
                  </a>
                </h3>
              </div>
              <div id="website_panel" class="collapse">
                <div class="panel-body">
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-warning"
                      role="progressbar"
                      style={{ width: "35%", background: "#0096c7" }}
                    >
                      JavaScript
                    </div>
                    <div
                      class="progress-bar progress-bar-success"
                      role="progressbar"
                      style={{ width: "20%", background: "#48cae4" }}
                    >
                      HTML & CSS
                    </div>
                  </div>
                  <p>
                    I started working on this website for the purpose of
                    presenting my portfolio alongside industrial placement
                    applications. This website was a project in itself to
                    present all my projects in a nice way. It was previously
                    hosted on DigitalOcean but I have moved it to Azure Static
                    Web Apps for ease of deployment.
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <a
                        href="https://github.com/frank-64/portfolio-website"
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-book"></i>GitHub Repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>
                  <a
                    data-toggle="collapse"
                    href="#gitswitch_panel"
                    title="Read More"
                    aria-controls="java_panel"
                    style={{ textAlign: "right" }}
                  >
                    GitSwitch
                  </a>
                </h3>
              </div>
              <div id="gitswitch_panel" class="collapse">
                <div class="panel-body">
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-info"
                      role="progressbar"
                      style={{ width: "100%", background: "#0077b6" }}
                    >
                      Python
                    </div>
                  </div>
                  <p>INSERT TEXT</p>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <a
                        href="https://github.com/frank-64/GitSwitch"
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-book"></i>GitHub Repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>
                  <a
                    data-toggle="collapse"
                    href="#test_panel"
                    title="Read More"
                    aria-controls="java_panel"
                    style={{ textAlign: "right" }}
                  >
                    EMPTY
                  </a>
                </h3>
              </div>
              <div id="empty_panel" class="collapse">
                <div class="panel-body">
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar"
                      role="progressbar"
                      style={{ width: "100%", background: "#0077b6" }}
                    >
                      C#
                    </div>
                  </div>
                  <p>
                    I started working on this website for the purpose of
                    presenting my portfolio alongside potential industrial
                    placement applications. This website was an addition to the
                    Movie Smash Django website, I just added an index.html page.
                    I decided to host this website using DigitalOcean which uses
                    an Ubuntu virtual machine as the hosting solution along with
                    Nginx and Gunicorn for serving HTTP requests and static
                    files.
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <a
                        href="https://github.com/frank-64/Django-Website"
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-book"></i>GitHub Repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>
                  <a
                    data-toggle="collapse"
                    href="#test_panel"
                    title="Read More"
                    aria-controls="java_panel"
                    style={{ textAlign: "right" }}
                  >
                    EMPTY
                  </a>
                </h3>
              </div>
              <div id="empty_panel" class="collapse">
                <div class="panel-body">
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar"
                      role="progressbar"
                      style={{ width: "100%", background: "#0077b6" }}
                    >
                      React
                    </div>
                  </div>
                  <p></p>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <a
                        href="https://github.com/frank-64/portfolio-Website"
                        data-toggle="tooltip"
                        title="GitHub"
                      >
                        <i class="listi fa fa-2x fa-book"></i>GitHub Repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="jumbotron" style={{ background: "#7AB7D1" }}></div>
      <footer className="footer">
        <div class="container">
          <strong>Frankie Clipsham © 2023</strong>
        </div>
      </footer>
    </div>
  );
}

export default App;
