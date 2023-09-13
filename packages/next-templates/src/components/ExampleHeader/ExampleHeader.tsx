import { Button, Link, Page, PageHeader, Textbox } from '@utrecht/component-library-react';
import Logo from '../../app/styling/assets/voorbeeld-header.svg';
import Search from '../../app/styling/assets/searchbar-icon.svg';
import User from '../../app/styling/assets/user-icon.svg';
import React, { HTMLAttributes } from 'react';
import './header.css';

interface ExampleHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeader = ({ ...props }: ExampleHeaderProps) => (
  <Page>
    <PageHeader className="example--header-home-page">
      <div className="example--logo">
        <Logo />
      </div>
      <div className="example--header-items">
        <div className="example--header-links-container">
          <Link className="example--header-links">
            <User className="example--header-user-icon" /> Mijn omgeving
          </Link>
          <Link className="example--header-links">Contact</Link>
        </div>
        <div className="example--search-box">
          <Textbox placeholder="Bijvoorbeeld zwembad of grofvuil" />
          <Button appearance="secondary-action-button">
            <Search /> Zoeken
          </Button>
        </div>
      </div>
    </PageHeader>
    <div className="example--header-navbar">
      <Link className="example--header-navbar-active">Home</Link>
      <Link>About</Link>
      <Link>Services</Link>
      <Link>Portfolio</Link>
      <Link>Contact</Link>
    </div>
  </Page>
);

ExampleHeader.displayName = 'ExampleHeader';
