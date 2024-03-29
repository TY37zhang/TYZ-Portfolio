const Map = () => {
  return (
    <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height={355}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=San%20Jose&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
          <a href="https://fmovies-online.net">fmovies</a>
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
            }}
          />
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
            }}
          />
        </div>
      </div>
      {/* Get your API here https://www.embedgooglemap.net */}
      {/*  <div className="mapouter">*/}
      {/*      <div className="gmap_canvas">*/}
      {/*          <iframe width="600" height="500" id="gmap_canvas"*/}
      {/*                  src="https://maps.google.com/maps?q=San%20Jose&t=&z=13&ie=UTF8&iwloc=&output=embed"*/}
      {/*                  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>*/}
      {/*          <a href="https://embedgooglemap.net/124/"></a><br>*/}
      {/*          <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>*/}
      {/*          <a href="https://www.embedgooglemap.net"></a>*/}
      {/*          <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>*/}
      {/*  </div>*/}
    </div>
  );
};
export default Map;
