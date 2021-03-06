#import <UIKit/UIKit.h>
#import <UMReactNativeAdapter/UMModuleRegistryAdapter.h>
#import <React/RCTBridgeDelegate.h>
#import <UMCore/UMAppDelegateWrapper.h>

@interface AppDelegate : UMAppDelegateWrapper<RCTBridgeDelegate>

@property (nonatomic, strong) UMModuleRegistryAdapter * moduleRegistryAdapter;
@property (nonatomic, strong) UIWindow *window;

@end
