import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * This will be used for global error handling
 */
@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private http: HttpClient) {
  }

  handleError(error: any): void {
    if ( environment.production ) {
      this.reportErrorMessage(error);
    }

    throw new Error(error);
  }

  private reportErrorMessage(error: any) {
    this.http.post(
      'https://hooks.slack.com/services/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',
      // '/services/T6T6XBBB8/B6T85K6ES/szHBRnk2wdECs0NDaWc07Eou',
      {
        icon_emoji: ':boom:',
        text: `<http://code.sktechx.com/projects/CSODA/repos/musicmall-web/browse> \n ${navigator.userAgent}`,
        attachments: [
          {
            title: `[ Error Message ] `,
            text: error.stack,
            color: '#3AA3E3',
            attachment_type: 'default',
            ts: Math.floor(Date.now() / 1000)
          }
        ]
      },
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        })
      }
    ).subscribe((res) => {
      console.log('report complete');
    });
  }
}
