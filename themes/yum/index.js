//----------
// Import components in two different ways:
//
// (1) import { Container, Row, Col, Spacer, Button } from '@@yum'
// (2) import * as yum from '@@yum'
//----------

// Layout
import Layout from './layout/Layout';
// Core
import Headline from './components/core/Headline'
import Section from './components/core/Section'
import Container from './components/core/Container'
import Row from './components/core/Row'
import Col from './components/core/Col'
import Spacer from './components/core/Spacer'
import Text from './components/core/Text'
import Button from './components/core/Button'
import Separator from './components/core/Separator'
import Pill from './components/core/Pill'
import YouTube from './components/core/YouTube'
import Video from './components/core/Video'
import Placeholder from './components/core/Placeholder'
import Spinner from './components/core/Spinner'
// Content
import CallToAction1 from './components/content/CallToAction1'
import HeadlineAndText from './components/content/HeadlineAndText'
import ColorfulHeadlineAndText from './components/content/ColorfulHeadlineAndText'
import Claim from './components/content/Claim'
import ImageAndText from './components/content/ImageAndText'
import TextVideo from './components/content/TextVideo'
import PriceCard from './components/content/PriceCard'
// Forms
import Form from './components/forms/Form'
import FormGroup from './components/forms/FormGroup'
import FormLabel from './components/forms/FormLabel'
import FormControl from './components/forms/FormControl'
import FormSelect from './components/forms/FormSelect'
// Special
import WorkshopTeaser from './components/special/WorkshopTeaser'

export {
  Layout,
  Section,
  Container,
  Row,
  Col,
  Spacer,
  Headline,
  Text,
  Button,
  Separator,
  Pill,
  YouTube,
  Video,
  Placeholder,
  Spinner,

  HeadlineAndText,
  ColorfulHeadlineAndText,
  Claim,
  ImageAndText,
  TextVideo,
  PriceCard,
  CallToAction1,

  WorkshopTeaser,
  
  Form, FormGroup, FormLabel, FormControl, FormSelect, 
}