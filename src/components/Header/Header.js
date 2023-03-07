function Header() {
  return (
    <header className="container-fluid px-0">

        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark">
          <div className="container">

          <a class="navbar-brand" href="#">Danish Shafi</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    </header>
  )
};

export default Header
