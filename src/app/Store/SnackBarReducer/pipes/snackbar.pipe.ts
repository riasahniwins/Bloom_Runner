import { Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';

@Pipe({ name: 'notification' })
export class SnackbarNotificationPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 1:
                return 'Success'
                break;
            case 1:
                return 'Error'
                break;
            case 1:
                return 'Warning'
                break;
            case 1:
                return 'Infomation'
                break;
        }
    }
}