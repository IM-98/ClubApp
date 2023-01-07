export interface Position {
  lat: number
  lng: number

}

// fix this interface
export interface Marker {
  position: any 
  label: {
    color: string,
  }
  title: string
}
