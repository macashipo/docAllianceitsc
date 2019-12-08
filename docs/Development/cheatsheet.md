## Component

```
import React from 'react'
import ReactDOM from 'react-dom'
class Hello extends React.Component {
  render () {
    return (
      <div className='message-box'>
        Hello {this.props.name}
      </div>
    )
  }
}
```

## Children

```
class Box extends Component {
  render () {
    return (
      <div className='box'>
        {this.props.children}
      </div>
    }
  }
}
```

Using
```
<Box>
  <p>Hello</p>
</Box>
```
