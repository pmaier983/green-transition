export interface MaterialIcon {
  name: string
  className?: string
}

export const MaterialIcon = ({ name, className }: MaterialIcon) => {
  return <i className={`material-icons ${className}`}>{name}</i>
}
