import React from 'react';
import './superstars.css';

const Superstars = ({ imageUrl, name, surname, origin, height, fights, championships, bio }) => {
  return (
    <main className="wrestler-info-container">
      <div className="wrestler-info-content">
        
        <div className="wrestler-image">
          <div className='wrestler-image-name'><h3>The Rock</h3></div>
          <img src='https://media.gettyimages.com/id/142809003/es/foto/miami-gardens-fl-dwayne-the-rock-johnson-looks-on-during-his-match-against-john-cena-during.jpg?s=612x612&w=0&k=20&c=TQXOHAWfIboQlAuq8BxZwIZpyNtQO9X6V2iXAbVw6sU=' alt={`${name}`} />
        </div>

        <div className="wrestler-details">
          <div className="wrestler-details-h-p-container">
            <div className='wrestler-details-h'>
              <h4>Origin</h4>
              <h4>Height</h4>
              <h4>Fights</h4>
              <h4>Championships</h4>
            </div>
            <div className="wrestler-details-p">
              <p>EEUU</p>
              <p>1.98 CM</p>
              <p>198</p>
              <p>32</p>
            </div>
          </div>

          <div className="wrestler-details-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laudantium, ducimus inventore cupiditate impedit optio omnis aut sequi quas molestiae
              fugit quia blanditiis natus eaque. Dignissimos animi tenetur earum explicabo perferendis deleniti corporis aspernatur aperiam quod reiciendis! Excepturi
              assumenda minus aut quibusdam error vitae deleniti. Dolores sapiente modi accusantium ad iusto tempore sit rerum in voluptatem quia qui amet quaerat ea necessitatibus, oo. Distinctio voluptate doloribus quos ut fuga dolorum dolore nam at sequi beatae aliquam minima quibusdam
              error, maiores ex eveniet libero perspiciatis et, accusantium corporis architecto quidem. Ullam quis obcaecati eius et perferendis hic quae voluptate, nostrum, dolorum doloremque corrupti
              repudiandae distinctio dicta in earum aliquid, sunt accusantium excepturi. Totam cumque deserunt quasi vero cum voluptate non provident consectetur nam maiores, reprehenderit accusamus pariatur quis a aut. Consectetur, beatae deserunt maxime eveniet asperiores eaque minus.
            </p>

            <small>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores incidunt deleniti commodi culpa odio tempore id dolorem repellat laboriosam numquam!"</small>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Superstars;