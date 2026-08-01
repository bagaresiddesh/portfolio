// Core packages
import { useEffect, useState } from 'react'

// Font Awesome packages
const { library } = require('@fortawesome/fontawesome-svg-core')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faCode,
  faSeedling,
  faToolbox,
  faLaptopCode,
  faCloud,
  faRobot,
  faPalette,
  faEnvelope,
  faMicrophone,
  faCreditCard,
  faPlug,
  faShieldHalved,
  faCertificate
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faBriefcase,
  faCode,
  faSeedling,
  faToolbox,
  faLaptopCode,
  faCloud,
  faRobot,
  faPalette,
  faEnvelope,
  faMicrophone,
  faCreditCard,
  faPlug,
  faShieldHalved,
  faCertificate,
  faGithub,
  faLinkedin,
  faInstagram
)

// Map Pro icon types to free equivalents
const typeMap = { fat: 'fas', fal: 'far', fad: 'fas' }

/**
 * Icon factory utility.
 * Generates icon JSX and returns it. Keeps all icon packages isolated in here
 *
 * ! Can only distribute free icons
 * ? give users access to cheat sheet of free icons
 * ? pre-select those icons in a MD file
 * ? use MD file to only load those icons from the lib
 *
 * ! requiring the library will likely create a SSR issue
 * ! According to maintainers of @fortawesome the best solution will be to import the icon directly
 * ! and avoit the library module all together which is inline with MD loading plans
 * * https://github.com/FortAwesome/Font-Awesome/issues/19348
 *
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {jsx} 	<Icon />
 */
export default function Icon ({ icon }) {
  const [iconType, iconKey] = icon
  const resolvedType = typeMap[iconType] || iconType

  const [stateIconKey, setIconKey] = useState('')

  useEffect(() => setIconKey(iconKey), [iconKey])

  return stateIconKey && <FontAwesomeIcon icon={[resolvedType, stateIconKey]} />
}
