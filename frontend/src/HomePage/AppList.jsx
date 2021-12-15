import React from 'react';
import AppCard from './AppCard';

const AppList = (props) => {
  return (
    <div style={{ minHeight: '600px' }} className="app-list">
      {props.isLoading && (
        <>
          {Array.from(Array(2)).map((_, rowIndex) => (
            <div className="row mb-4" key={rowIndex}>
              {Array.from(Array(5)).map((_, index) => (
                <div className="col" key={rowIndex * 5 + index}>
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line"></div>
                </div>
              ))}
            </div>
          ))}
        </>
      )}

      {props.meta.total_count > 0 && (
        <div className="container px-0">
          {Array.from(Array(3)).map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {Array.from(Array(5)).map((_, index) =>
                props.apps[rowIndex * 5 + index] ? (
                  <div className="col">
                    <AppCard
                      app={props.apps[rowIndex * 5 + index]}
                      key={props.apps[rowIndex * 5 + index].id}
                      canCreateApp={props.canCreateApp}
                      canDeleteApp={props.canDeleteApp}
                      canUpdateApp={props.canUpdateApp}
                      folders={props.folders}
                      foldersChanged={props.foldersChanged}
                      deleteApp={props.deleteApp}
                      cloneApp={props.cloneApp}
                      exportApp={props.exportApp}
                    />
                  </div>
                ) : (
                  <div className="col"></div>
                )
              )}
            </div>
          ))}
        </div>
      )}
      {props.currentFolder.count === 0 && (
        <div>
          <img className="mx-auto d-block" src="assets/images/icons/empty-folder-svgrepo-com.svg" height="120px" />
          <span className="d-block text-center text-body">This folder is empty</span>
        </div>
      )}
    </div>
  );
};

export default AppList;