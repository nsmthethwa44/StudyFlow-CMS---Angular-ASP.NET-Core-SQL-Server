import { Component } from '@angular/core';
import { Login } from '../../auth/login/login';
import { Register } from '../../auth/register/register';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [Login, Register],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 isLoginVisible = false;
 isRegisterVisible = false;
  isScrolled = false;
  isNavBarOpen = false;

  toggleNavBar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }

  closeNavbar() {
    this.isNavBarOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80;
  }

 showLogin(){
  this.isLoginVisible = !this.isLoginVisible;
  this.isRegisterVisible = false;
 this.closeNavbar();
 }

 showRegister(){
  this.isRegisterVisible = true;
  this.isLoginVisible = false
 }
}
