import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../services/registration-service.service';

@Component({
    selector: 'registration',
    styleUrls: ['registration.component.css'],
    templateUrl: 'registration.component.html'
})
export class RegistrationComponent implements OnInit {
    public fields: string[];

    constructor(private registrationService: RegistrationService) {
        //
    }

    public ngOnInit(): void {
        this.fields = this.registrationService.getFields();
    }
}