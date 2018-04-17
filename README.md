# jquery loading effect

A simple jquery plugin for adding loading effect into your web apps.

# Use

After adding ``` ib-loading.js ``` into your html file, you need to create two containers like below.

```
<div id="loader"></div>
<div id="body">Whole Content Goes here</div>
```

And then call ``` ibLoading() ``` function like below

```
$('#loader').ibLoading({ targetEl: "#body" });
/*
  Possible options
  {
    duration: 2000,
    targetEl: null,
    bgColor: '#666666',
    height: '1%',
    top: '49.5%'
  }
*/
```

# Example

Download in zip format. After extracting, open index.html for working example.

"Open for ideas/issues contact: "
## Author

* **Inambe** - *Issue/Idea* - (inamulhuq44@gmail.com)
