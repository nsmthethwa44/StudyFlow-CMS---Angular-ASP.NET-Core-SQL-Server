import { Component } from '@angular/core';
import { Hero } from "../../sections/hero/hero";
import { Future } from "../../sections/future/future";
import { About } from "../../sections/about/about";
import { Services } from "../../sections/services/services";
import { Cta } from '../../sections/cta/cta';
import { PopularCourses } from '../../sections/popular-courses/popular-courses';
import { Clients } from '../../sections/clients/clients';
import { WhyUs } from '../../sections/why-us/why-us';
import { Commitment } from '../../sections/commitment/commitment';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Future, About, Services, Cta, PopularCourses, Clients, WhyUs, Commitment, Contact, ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
