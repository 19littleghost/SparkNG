import { Component } from '@angular/core';

interface VersionCompatibilityEntry {
    sparkng: string;
    angular: string;
}

@Component({
    selector: 'app-version-compatibility',
    standalone: true,
    template: `
        <table class="doc-table">
            <thead>
                <tr>
                    <th>SparkNG</th>
                    <th>Angular</th>
                </tr>
            </thead>
            <tbody>
                @for (entry of entries; track entry.sparkng) {
                    <tr>
                        <td>{{ entry.sparkng }}</td>
                        <td>{{ entry.angular }}</td>
                    </tr>
                }
            </tbody>
        </table>
    `
})
export class AppVersionCompatibility {
    entries: VersionCompatibilityEntry[] = [
        { sparkng: 'v2', angular: 'v22' },
        { sparkng: 'v1', angular: 'v21' }
    ];
}
