import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { DISCORD_URL } from '@/utils/constants';
import { Component } from '@angular/core';

@Component({
    selector: 'helpneeded-doc',
    standalone: true,
    imports: [AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>SparkNG is a community-driven project stewarded by bdSpark, and we appreciate any help you can provide. Here are some areas where you can contribute:</p>
            <h3>Issue Triage</h3>
            <p>Help us manage issues by;</p>
            <ul class="list-disc list-inside line-height-3 px-10 m-0">
                <li>Reproducing reported bugs</li>
                <li>Clarifying issue descriptions</li>
                <li>Tagging issues with appropriate labels</li>
            </ul>

            <h3>Sending Pull Requests</h3>
            <p>We encourage you to send pull requests, especially for issues tagged with the <i>help-needed</i> label.</p>

            <h3>Community Support</h3>
            <p>
                Assist other users by participating in the issue tracker, <a href="https://github.com/TODO-BDSPARK-ORG/sparkng/discussions" target="_blank" rel="noopener noreferrer">GitHub discussions</a>, and the
                <a [href]="discordUrl" target="_blank" rel="noopener noreferrer">SparkNG Discord</a>. Your expertise can help others solve problems and improve their experience with SparkNG.
            </p>
        </app-docsectiontext>
    `
})
export class HelpNeededDoc {
    readonly discordUrl = DISCORD_URL;
}
