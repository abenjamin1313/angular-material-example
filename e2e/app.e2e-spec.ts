import { AppPage } from './app.po';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../src/app/app-routing.module';

import { AppComponent } from '../src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../src/app/material.module';

import { XyzErrorHandlerService } from '../src/app/error-handler.service';

describe('ng5-material App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Home Title');
  });
});
