import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav
				className='navbar fixed-top navbar-expand-lg'
				style={{ backgroundColor: '#194350' }}
			>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/' style={{ color: 'white' }}>
						NewsKoala ʕ •ᴥ•ʔ{' '}
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<img src='sidemunu.png' />
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link
									style={{ color: 'white' }}
									className='nav-link '
									aria-current='page'
									to='/business'
								>
									Business
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									style={{ color: 'white' }}
									className='nav-link '
									aria-current='page'
									to='/entertainment'
								>
									Entertainment
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									style={{ color: 'white' }}
									className='nav-link '
									aria-current='page'
									to='/health'
								>
									Health
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									style={{ color: 'white' }}
									className='nav-link '
									aria-current='page'
									to='/science'
								>
									Science
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									style={{ color: 'white' }}
									className='nav-link '
									aria-current='page'
									to='/sports'
								>
									Sports
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									style={{ color: 'white' }}
									className='nav-link '
									aria-current='page'
									to='/technology'
								>
									Technology
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
