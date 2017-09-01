# Monalisar

Github widgets for Angular

## Installation

To install Monalisar, run:

```bash
$ npm install monalisar --save
```

## Usage in Angular

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Monalisar } from 'monalisar';  // import Monalisar

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Monalisar  // and add Monalisar here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Example

- User repos
```html
<github-repos [user]="'micin-jp'"></github-repos>
```

- User repo
```html
<github-repo [user]="'micin-jp'" [repo]="'monalisar'"></github-repo>
```


## Style adjustment

- HTML Structure
```scss
div.github-repo(s)
  div.github-repo-widget
    div.github-repo-widget-name
      a
    div.github-repo-widget-desc
    div.github-repo-widget-summary
      div.github-repo-widget-lang
        i
        span
      div.github-repo-widget-octicon
        svg
          path
        span
      div.github-repo-widget-octicon
        svg
          path
        span
```
