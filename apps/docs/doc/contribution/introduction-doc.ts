import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'introduction-doc',
    standalone: true,
    imports: [AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>SparkNG is a community-maintained Angular UI library, stewarded by bdSpark and dedicated to providing high-quality, versatile and accessible UI components that help developers build better applications faster.</p>
            <h3>Development Setup</h3>
            <p>To begin with, clone the SparkNG repository from GitHub:</p>
            <app-code [code]="code1" [hideToggleCode]="true" [hideStackBlitz]="true"></app-code>
            <p style="margin-top: 1rem;">Then run the documentation app in your local environment at <i>http://localhost:4200/</i>.</p>
            <app-code [code]="code2" [hideToggleCode]="true" [hideStackBlitz]="true"></app-code>
            <h3>Project Structure</h3>
            <p>SparkNG's project structure is organized as follows:</p>
            <app-code [code]="code3" [hideToggleCode]="true" [hideStackBlitz]="true"></app-code>
        </app-docsectiontext>
    `
})
export class IntroductionDoc {
    code1: Code = {
        typescript: `git clone https://github.com/Aronno1920/SparkNG.git
cd sparkng`
    };
    code2: Code = {
        typescript: `pnpm install
pnpm run dev`
    };
    code3: Code = {
        typescript: `- apps
  - docs                       // this documentation website
  - tailwind-playgrounds       // Tailwind integration sandboxes
- packages
  - sparkng                 // components, directives and services
  - sparkng-themes          // built-in theme presets
  - sparkng-styled          // styled-mode theming engine
  - sparkng-styles          // base styles
  - sparkng-tailwindcss     // Tailwind CSS plugin
  - sparkng-locale          // i18n locales
  - sparkng-motion          // animation utilities
  - sparkng-utils           // shared helpers`
    };
}
