import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCurrentShow, selectIsShowLoading} from '../../store/showSlice';
import {fetchOneShow} from '../../store/showThunks';
import {FormatDate} from '../../components/FormatDate/FormatDate';
import {Show} from '../../types';
import NoImage from '../../assets/NoImage.png';
import Loader from '../../components/Loader/Loader';

const ShowContainer = () => {
  const {id} = useParams();
  const currentShow: Show = useAppSelector(selectCurrentShow);
  const loading = useAppSelector(selectIsShowLoading);
  const dispatch = useAppDispatch();
  let image;
  let name;
  let genres;
  let type;
  let country;
  let language;
  let rating;
  let status;
  let website;
  let premiered;
  let ended;
  let summary;

  const getDate = async () => {
    await dispatch(fetchOneShow(id));
  };

  useEffect(() => {
    if (id) {
      void getDate();
    }
  }, [id]);

  const getRender = (title, data) => {
    return (
      <p className="text-secondary">{title}:
        <span className="text-dark"> {data}</span>
      </p>
    );
  };

  if (currentShow) {
    if (currentShow.name) {
      name = (<h2>{currentShow.name}</h2>);
      image = (<img className="rounded" src={NoImage} alt={currentShow.name}/>);
      if (currentShow.image && currentShow.image.medium) {
        image = (
          <img className="rounded" src={currentShow.image.medium} alt={currentShow.name}/>);
      }
    }
    if (currentShow.genres.length > 0) {
      genres = getRender('Genres', currentShow.genres.join(', '));
    }
    if (currentShow.type) {
      type = getRender('Type', currentShow.type);
    }
    if (currentShow.network && currentShow.network.country.name) {
      country = getRender('Country', currentShow.network.country.name);
    }
    if (currentShow.language) {
      language = getRender('Language', currentShow.language);
    }
    if (currentShow.rating.average) {
      rating = getRender('Rating', currentShow.rating.average);
    }
    if (currentShow.status) {
      status = getRender('Status', currentShow.status);
    }
    if (currentShow.officialSite) {
      website = (
        <p><a className="btn btn-outline-primary" href={currentShow.officialSite}>Official Site</a></p>
      );
    }
    if (currentShow.premiered) {
      const date = new FormatDate(currentShow.premiered).toStringFormatDate();
      premiered = getRender('Premiered', date);
    }
    if (currentShow.ended) {
      const date = new FormatDate(currentShow.ended).toStringFormatDate();
      ended = getRender('Ended', date);
    }
    if (currentShow.summary) {
      summary = (
        <FroalaEditorView
          model={currentShow.summary}
        />
      );
    }
  }

  return (
    <>{loading ? <Loader/> :
      <>
        <div className="d-flex gap-3 mb-2">
          <div>
            {image}
          </div>
          <div>
            {name}
            {genres}
            {type}
            {country}
            {language}
            {rating}
            {premiered}
            {ended}
            {status}
            {website}
          </div>
        </div>
        {summary}
      </>
    }
    </>
  );
};

export default ShowContainer;