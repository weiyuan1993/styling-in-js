# stylingjs

## Summary

Writing css in js, even if the pseudo element.

## Usage

just include to your html file.

```html
<script src="path/styling.js"></script>
```

### Syntax

```typescript
addStyle(selector:String,rule:Object,pseudoElement:String);
```

### Examples

normal css styling:

```javascript
// dash content must use string
addStyle("#input[type=range]", {
    width: "30px",
    "margin-bottom": "10px"
});
```

pseudo element styling:

```javascript
// Remember pseudo element's colon
addStyle(
    "#input[type=range]",
    {
        "-webkit-appearance": "none",
        border: "2px solid #07c"
    },
    "::-webkit-slider-thumb"
);
```
