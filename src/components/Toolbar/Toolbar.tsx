import {Link} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar bg-body-tertiary mb-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Show master</Link>
      </div>
    </nav>
  );
};

export default Toolbar;