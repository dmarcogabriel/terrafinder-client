import React from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { MdMap } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';
import { moneyFormat } from 'utils/formatters';
import imagePlaceholder from 'common/static/soja.jpg';
import classes from './Property.module.scss';

export default function Property({ dataTestId, property, index, onSelect }) {
  const [photo] = property.photos;

  return (
    <div
      data-testid={dataTestId || 'property'}
      role="button"
      tabIndex={index}
      onKeyDown={() => onSelect(property._id)}
      className={classes.propertyItem}
      onClick={() => onSelect(property._id)}
    >
      {/*
        // todo: add carousel here
      */}
      <img
        data-testid="photo"
        src={
          photo
            ? `${process.env.REACT_APP_STATIC}/images/${photo}`
            : imagePlaceholder
        }
        alt={photo || 'Propriedade'}
      />

      <div className={classes.content}>
        <p className={classes.name}>{property.name}</p>

        <p className={classes.amount}>{moneyFormat(property.amount, false)}</p>

        <div className={classes.attributes}>
          <div className={classes.attribute}>
            <AiOutlineFullscreen size={22} className={classes.icon} />
            <p>{property.size}ha</p>
          </div>

          <div className={classes.attribute}>
            <RiPlantFill size={22} className={classes.icon} />
            <p>{property.farming[0]}</p>
          </div>

          <div className={classes.attribute}>
            <MdMap size={22} className={classes.icon} />
            <p>{property.state}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
