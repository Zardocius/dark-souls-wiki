import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import "../css/weaponPage.scss";

interface Jsondata {
  title: string;
  image: string;
  description: string;
  requirements: {
    [key: string]: string;
  };
  attackType: string;
  enchantable: string;
  special: string;
}

const WeaponPage = () => {
  const [data, setData] = useState<Jsondata | null>(null);
  const { ID } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await import(`../contents/items/weapons/${ID}.json`);
      setData(data);
    }

    getData();
  }, [ID]);

  return (
    <div>
      {data !== null && (
        <div className="weaponPage">
          <div className="weaponTitle">
            <p>{data.title}</p>
          </div>
          <div className="itemCard">
            <div className="itemIcon">
              <img src={data.image}></img>
            </div>
            <div className="itemInfo">
              <div className="itemRequirements">
                <img src="/images/ui_icons/stat_strength.png"></img>
                <img src="/images/ui_icons/stat_dexterity.png"></img>
                <img src="/images/ui_icons/stat_intelligence.png"></img>
                <img src="/images/ui_icons/stat_faith.png"></img>
                <div className="itemReqStats">
                  {Object.keys(data.requirements).map((key, index) => {
                    const requirement =
                      data.requirements[key as keyof typeof data.requirements];

                    return <p key={index}>{requirement}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="itemDesc">
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeaponPage;
