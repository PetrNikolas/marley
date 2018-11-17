// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ------------------------------------------------------------------------------
// Import pages
// ------------------------------------------------------------------------------
import { WelcomeComponent } from './pages/welcome.component';

@NgModule({
	imports: [CommonModule, FormsModule, HttpClientModule],
	declarations: [WelcomeComponent],
})
export class WelcomeModule {}
