---
id: cheatsheet
title: Cheatsheet
---

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

## Import multiple exports

```
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
class Hello extends Component {
  ...
}
```

## States

```
constructor(props) {
  super(props)
  this.state = { username: undefined }
}
this.setState({ username: 'rstacruz' })
```

## Properties

```
<Video fullscreen={true} autoplay={false} />
render () {
  this.props.fullscreen
  const { fullscreen, autoplay } = this.props
  ···
}
```

## Nesting

```
class Info extends Component {
  render () {
    const { avatar, username } = this.props

    return <div>
      <UserAvatar src={avatar} />
      <UserProfile username={username} />
    </div>
  }
}
```

Có thể sử dụng Fragment

```
class Info extends Component {
  render () {
    const { avatar, username } = this.props

    return (
      <Fragment>
        <UserAvatar src={avatar} />
        <UserProfile username={username} />
      </Fragment>
    )
  }
}
```

## Defaults

***Setting default props***

```
Hello.defaultProps = {
  color: 'blue'
}
```

***Setting default state***

Trong constructor

```
class Hello extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: true }
  }
}
```

Hoặc: không ở trong constructor

```
class Hello extends Component {
    state = { visible: true }
  }
}
```

## Functional components

props là tham số của hàm

```
function MyComponent ({ name }) {
  return <div className='message-box'>
    Hello {name}
  </div>
}
```

## Pure components

Không render lại nếu props/state không thay đổi

```
import React, {PureComponent} from 'react'

class MessageBox extends PureComponent {
  ···
}
```

## Lifecycle

***Mounting***

```
constructor (props)	Before rendering #
componentWillMount()	Don’t use this #
render()	Render #
componentDidMount()	After rendering (DOM available) #
componentWillUnmount()	Before DOM removal #
componentDidCatch()	Catch errors (16+) #
```

***Updating***

Được gọi khi coponent cha thay đổi props và setState()

```
componentDidUpdate (prevProps, prevState, snapshot)	Use setState() here, but remember to compare props
shouldComponentUpdate (newProps, newState)	Skips render() if returns false
render()	Render
componentDidUpdate (prevProps, prevState)	Operate on the DOM here
```

## Other features

***Transferring props***

```
<VideoPlayer src="video.mp4" />
class VideoPlayer extends Component {
  render () {
    return <VideoEmbed {...this.props} />
  }
}
```

## JSX patterns

***Inner HTML***

```
function markdownify() { return "<p>...</p>"; }
<div dangerouslySetInnerHTML={{__html: markdownify()}} />
```

***Lists***

```
class TodoList extends Component {
  render () {
    const { items } = this.props

    return <ul>
      {items.map(item =>
        <TodoItem item={item} key={item.key} />)}
    </ul>
  }
}
```

## New features

***Returning multiple elements***

return mảng (Array)

```
render () {
  // Don't forget the keys!
  return [
    <li key="A">First item</li>,
    <li key="B">Second item</li>
  ]
}
```

return Fragments

```
render () {
  // Fragments don't require keys!
  return (
    <Fragment>
      <li>First item</li>
      <li>Second item</li>
    </Fragment>
  )
}
```

***Returning strings***

Có thể return một chuỗi

```
render() {
  return 'Look ma, no spans!';
}
```

***Errors***

Bắt lỗi trong componentDidCatch

```
class MyComponent extends Component {
  ···
  componentDidCatch (error, info) {
    this.setState({ error })
  }
}
```