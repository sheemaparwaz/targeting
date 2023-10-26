// components/heading.tsx
const Heading = (props: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
  <h1 className="my-heading">{props.title}</h1>
)
