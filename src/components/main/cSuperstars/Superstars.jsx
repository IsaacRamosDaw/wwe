import React from 'react';
import './superstars.css';

const Superstars = ({ imageUrl, name, surname, origin, height, fights, championships, bio }) => {
  return (
    <main className="wrestler-info-container">
      <div className="wrestler-info-content">
        <div className="wrestler-image">
        <img src='https://media.gettyimages.com/id/142809003/es/foto/miami-gardens-fl-dwayne-the-rock-johnson-looks-on-during-his-match-against-john-cena-during.jpg?s=612x612&w=0&k=20&c=TQXOHAWfIboQlAuq8BxZwIZpyNtQO9X6V2iXAbVw6sU=' alt={`${name}`} />
        </div>
        <div className="wrestler-details">
          <h2>The Rock Samoan</h2>
          <h2>Origin</h2><p>{origin}</p>
          <h2>Height</h2><p>{height}</p>
          <h2>Fights</h2><p>{fights}</p>
          <h2>Championships</h2><p>{championships}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt debitis doloremque. Voluptas, aut! Quisquam cupiditate pariatur sequi eaque suscipit a accusamus consequatur ex, cumque laborum. Possimus itaque delectus ea suscipit error sint porro saepe enim optio, cum sunt unde consectetur consequuntur neque assumenda architecto libero, cumque corporis nihil asperiores doloremque reprehenderit quasi aliquam molestias. Veritatis reiciendis iusto mollitia quibusdam! Ipsum sunt repudiandae harum hic beatae velit vero facilis. Voluptate omnis earum quidem ducimus corporis consequatur incidunt veritatis, deserunt minima iusto quasi explicabo nam laboriosam dolorem aperiam a assumenda repudiandae inventore distinctio nemo dolores illum. Totam animi sapiente accusantium. Accusantium, ratione tempora voluptatem ipsa deleniti possimus saepe optio blanditiis. Enim labore architecto eligendi ut, recusandae quia animi est, minus necessitatibus doloribus repellat? Architecto sit odit at quo vero consequatur autem necessitatibus alias vel quam voluptas iste, odio molestiae dignissimos aperiam aut ipsa atque laborum, ab obcaecati eaque. Commodi non quis deleniti, asperiores quia obcaecati. Ullam nulla maxime, saepe obcaecati, a non in nisi impedit est corporis molestias vitae architecto tenetur sequi dolorem voluptatibus quaerat veritatis voluptas. Soluta cupiditate velit labore consectetur, officia voluptatem facilis animi, dolores neque eum cumque est aperiam aspernatur laborum! Labore cupiditate accusamus aperiam minus autem architecto!</p>
        </div>
      </div>
    </main>
  );
};

export default Superstars;